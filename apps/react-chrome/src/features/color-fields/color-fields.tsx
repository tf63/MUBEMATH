// MIT License
// https://github.com/Wondermarin/react-color-palette

// Copyright (c) 2021 Wondermarin

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import type React from 'react'
import { memo, useCallback, useEffect, useState } from 'react'

import { ColorService, type IColor } from 'react-color-palette'

function float(value: number, decimalPlaces: number) {
    return Math.round(value * 10 ** decimalPlaces) / 10 ** decimalPlaces
}

function formatRgb({ r, g, b, a }: IColor['rgb']) {
    const rgb = [Math.round(r), Math.round(g), Math.round(b)]
    const alpha = float(a, 3)

    if (alpha < 1) rgb.push(alpha)

    return rgb.join(', ')
}

function formatHsv({ h, s, v, a }: IColor['hsv']) {
    const hsv: (string | number)[] = [`${Math.round(h)}°`, `${Math.round(s)}%`, `${Math.round(v)}%`]
    const alpha = float(a, 3)

    if (alpha < 1) hsv.push(alpha)

    return hsv.join(', ')
}

export interface IFieldsProps {
    readonly hideInput: (keyof IColor)[] | boolean
    readonly color: IColor
    readonly onChange: (color: IColor) => void
    readonly onChangeComplete?: (color: IColor) => void
}

export const ColorFields = memo(({ color, onChange, onChangeComplete }: IFieldsProps) => {
    const [fields, setFields] = useState({
        hex: {
            value: color.hex,
            inputted: false,
        },
        rgb: {
            value: formatRgb(color.rgb),
            inputted: false,
        },
        hsv: {
            value: formatHsv(color.hsv),
            inputted: false,
        },
    })

    useEffect(() => {
        if (!fields.hex.inputted) {
            setFields((fields) => ({ ...fields, hex: { ...fields.hex, value: color.hex } }))
        }
    }, [fields.hex.inputted, color.hex])

    useEffect(() => {
        if (!fields.rgb.inputted) {
            setFields((fields) => ({ ...fields, rgb: { ...fields.rgb, value: formatRgb(color.rgb) } }))
        }
    }, [fields.rgb.inputted, color.rgb])

    useEffect(() => {
        if (!fields.hsv.inputted) {
            setFields((fields) => ({ ...fields, hsv: { ...fields.hsv, value: formatHsv(color.hsv) } }))
        }
    }, [fields.hsv.inputted, color.hsv])

    const onInputChange = useCallback(
        <T extends keyof typeof fields>(field: T) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target

                setFields((fields) => ({ ...fields, [field]: { ...fields[field], value } }))

                if (field === 'hsv') onChange(ColorService.convert('hsv', ColorService.toHsv(value)))
                else if (field === 'rgb') onChange(ColorService.convert('rgb', ColorService.toRgb(value)))
                else onChange(ColorService.convert('hex', value))
            },
        [onChange]
    )

    const onInputFocus = useCallback(
        <T extends keyof typeof fields>(field: T) =>
            () => {
                setFields((fields) => ({ ...fields, [field]: { ...fields[field], inputted: true } }))
            },
        []
    )

    const onInputBlur = useCallback(
        <T extends keyof typeof fields>(field: T) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                const { value } = event.target

                setFields((fields) => ({ ...fields, [field]: { ...fields[field], inputted: false } }))

                if (field === 'hsv') onChangeComplete?.(ColorService.convert('hsv', ColorService.toHsv(value)))
                else if (field === 'rgb') onChangeComplete?.(ColorService.convert('rgb', ColorService.toRgb(value)))
                else onChangeComplete?.(ColorService.convert('hex', value))
            },
        [onChangeComplete]
    )

    return (
        <input
            id="hex"
            className="w-[100px] text-center outline-slate-300"
            value={fields.hex.value}
            onChange={onInputChange('hex')}
            onFocus={onInputFocus('hex')}
            onBlur={onInputBlur('hex')}
        />
    )
})
