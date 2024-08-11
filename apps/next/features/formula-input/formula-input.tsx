'use client'

import { useRef, useState, type ChangeEvent } from 'react'
import { useColor } from 'react-color-palette'

import { ColorPicker } from '@ui/components/color-picker'
import { FontSizeDropdown } from '@ui/components/font-size-dropdown'
import { Formula } from '@ui/components/formula'
import { useDOMtoImage } from '@ui/hooks/use-dom-to-image.tsx'
import { cn } from '@ui/lib/utils'

type FormulaInputProps = {
    inline: boolean
}

const isColorLight = (color: string) => {
    const hexColor = color.replace('#', '')

    const r = Number.parseInt(hexColor.substring(0, 2), 16)
    const g = Number.parseInt(hexColor.substring(2, 4), 16)
    const b = Number.parseInt(hexColor.substring(4, 6), 16)

    const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

    const threshold = 186

    return brightness > threshold
}

export const FormulaInput = ({ inline }: FormulaInputProps) => {
    const [formula, setFormula] = useState<string>('')

    const [color, setColor] = useColor('#000000FF')
    const [fontSize, setFontSize] = useState<string>('16px')

    const elementRef = useRef<HTMLDivElement>(null)

    const { downloadImage, copyImage } = useDOMtoImage(elementRef)

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target
        setFormula(value)
    }

    return (
        <div>
            <div className="card bg-base-100 mx-auto mb-12 mt-6 max-w-[900px] p-8 pb-10 shadow-md">
                <p className="font-bold">Katex Block</p>
                <div className="w-full">
                    <div className="mx-20 overflow-hidden border-b-2 py-2">
                        <Formula formula={formula} inline={inline} />
                    </div>
                    <textarea
                        value={formula}
                        onChange={onChange}
                        spellCheck={false}
                        className="textarea textarea-bordered mx-auto mb-7 mt-10 h-40 w-full 2xl:h-80"
                        placeholder="Input formula..."
                    />

                    <div className="flex flex-wrap gap-5 space-y-0">
                        <button
                            type="button"
                            className="btn btn-primary shadow-primary outline-none"
                            onClick={downloadImage}
                            tabIndex={-1}
                        >
                            Download as Image
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary shadow-secondary outline-none"
                            onClick={copyImage}
                            tabIndex={-1}
                        >
                            Copy as Image
                        </button>
                        <ColorPicker color={color} setColor={setColor} />
                        <FontSizeDropdown fontSize={fontSize} setFontSize={setFontSize} />
                    </div>
                </div>
            </div>

            <div
                className={cn(
                    'card mx-auto h-fit min-h-44 max-w-[900px] p-8 2xl:min-h-80',
                    isColorLight(color.hex) ? 'shadow-dark bg-zinc-500 text-zinc-200' : 'shadow-md'
                )}
            >
                <p className="font-bold">Preview</p>
                <div
                    className="mt-2 overflow-x-scroll"
                    style={{
                        color: color.hex,
                        fontSize
                    }}
                >
                    <Formula ref={elementRef} formula={formula} inline={inline} />
                </div>
            </div>
        </div>
    )
}
