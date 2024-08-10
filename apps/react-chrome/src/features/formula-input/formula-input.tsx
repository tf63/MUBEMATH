'use client'

import { type ChangeEvent, useEffect, useRef, useState } from 'react'

import { Formula } from '@ui/components/formula'
import { useDOMtoImage } from '@ui/hooks/use-dom-to-image'

import 'react-color-palette/css'
import { Copy, Download } from 'lucide-react'

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

    // const [color, setColor] = useColor('#000000FF')
    // const [fontSize, setFontSize] = useState<string>('16px')

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)

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
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [copyImage, downloadImage])

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setFormula(value)
    }

    return (
        <div className="mx-auto h-fit max-w-[900px]">
            <div className="flex">
                <div
                    className="overflow-auto border-b-2 w-full"
                    style={{
                        color: 'black',
                        fontSize: '24px',
                    }}
                >
                    <Formula ref={elementRef} formula={formula} inline={inline} />
                </div>

                <div className="mb-auto mt-1 ml-10 gap-x-3 flex">
                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="button"
                            className="w-fit h-fit flex-none p-3 bg-base-100 shadow-md rounded-full"
                            onClick={copyImage}
                        >
                            <Copy className="w-6 h-6" />
                        </button>
                        <p className="text-xs mt-1 w-fit py-0.5 px-1">⌘+c</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button
                            type="button"
                            className="w-fit h-fit flex-none p-3 bg-base-100 shadow-md rounded-full"
                            onClick={downloadImage}
                        >
                            <Download className="w-6 h-6" />
                        </button>
                        <p className="text-xs mt-1 w-fit py-0.5 px-1">⌘+s</p>
                    </div>
                </div>
            </div>

            <textarea
                value={formula}
                onChange={onChange}
                spellCheck={false}
                className="textarea textarea-bordered mx-auto mt-6 h-20 w-full"
                placeholder="..."
            />
        </div>
    )
}
