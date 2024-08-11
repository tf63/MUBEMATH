'use client'

import { Copy, Download, Palette } from 'lucide-react'
import { useEffect, useRef, useState, type ChangeEvent } from 'react'
import { Alpha, Hue, Saturation, useColor } from 'react-color-palette'

import { ColorFields } from '@chrome/features/color-fields'

import { Formula } from '@ui/components/formula'
import { useCloseRef } from '@ui/hooks/use-close-ref'
import { useDOMtoImage } from '@ui/hooks/use-dom-to-image'

import 'react-color-palette/css'

type FormulaInputProps = {
    inline: boolean
}

// const isColorLight = (color: string) => {
//     const hexColor = color.replace('#', '')

//     const r = Number.parseInt(hexColor.substring(0, 2), 16)
//     const g = Number.parseInt(hexColor.substring(2, 4), 16)
//     const b = Number.parseInt(hexColor.substring(4, 6), 16)

//     const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

//     const threshold = 186

//     return brightness > threshold
// }

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

    const [color, setColor] = useColor('#000000FF')
    // const [fontSize, setFontSize] = useState<string>('16px')

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)
    const { closeRef } = useCloseRef()

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey) {
                // ここでpreventDefaultしないとinput要素への入力も受け付けなくなる
                e.preventDefault()

                if (e.key === 'c') {
                    copyImage()
                }

                if (e.key === 's') {
                    downloadImage()
                }

                if (e.key === 'g') {
                    if (closeRef.current == null) {
                        return
                    }

                    closeRef.current.open = !closeRef.current.open
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [copyImage, downloadImage, closeRef])

    const onFormulaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setFormula(value)
    }

    return (
        <div className="mx-auto h-fit max-w-[900px]">
            <div className="flex">
                <div
                    className="w-full overflow-auto border-b-2"
                    style={{
                        color: color.hex,
                        fontSize: '24px'
                    }}
                >
                    <Formula ref={elementRef} formula={formula} inline={inline} />
                </div>

                <div className="mb-auto ml-10 mt-1 flex gap-x-3">
                    <div className="flex flex-col items-center justify-center">
                        <details className="dropdown dropdown-left" ref={closeRef}>
                            <summary
                                className="btn bg-base-100 h-fit w-fit flex-none rounded-full p-3 shadow-md"
                                tabIndex={-1}
                            >
                                <Palette className="h-6 w-6" />
                            </summary>
                            <div className="dropdown-content [&_.rcp-root]:bg-base-100 mr-5 mt-2 w-[100px] space-y-3 [&_.rcp-saturation]:rounded-md">
                                <Saturation height={100} color={color} onChange={setColor} />
                                <Hue color={color} onChange={setColor} />
                                <Alpha color={color} onChange={setColor} />
                                <ColorFields color={color} onChange={setColor} hideInput={['hsv', 'rgb']} />
                            </div>
                        </details>
                        <p className="mt-1 w-fit px-1 py-0.5 text-xs">⌘+g</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="button"
                            className="btn bg-base-100 h-fit w-fit flex-none rounded-full p-3 shadow-md"
                            onClick={copyImage}
                        >
                            <Copy className="h-6 w-6" />
                        </button>
                        <p className="mt-1 w-fit px-1 py-0.5 text-xs">⌘+c</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="button"
                            className="btn bg-base-100 h-fit w-fit flex-none rounded-full p-3 shadow-md"
                            onClick={downloadImage}
                        >
                            <Download className="h-6 w-6" />
                        </button>
                        <p className="mt-1 w-fit px-1 py-0.5 text-xs">⌘+s</p>
                    </div>
                </div>
            </div>

            <textarea
                value={formula}
                onChange={onFormulaChange}
                spellCheck={false}
                className="textarea textarea-bordered mx-auto mt-6 h-20 w-full"
                placeholder="..."
            />
        </div>
    )
}
