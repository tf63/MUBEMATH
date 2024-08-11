import type { Meta, StoryObj } from '@storybook/react'
import { useColor } from 'react-color-palette'

import { ColorPicker } from './color-picker'

type ColorPickerType = typeof ColorPicker

export default {
    title: 'Components/ColorPicker',
    component: ColorPicker
} satisfies Meta<ColorPickerType>

const ColorPickerWithState = () => {
    const [color, setColor] = useColor('#000000FF')

    return (
        <div className="flex h-screen items-center justify-center">
            <ColorPicker color={color} setColor={setColor} />
        </div>
    )
}

export const Default: StoryObj<ColorPickerType> = {
    render: () => <ColorPickerWithState />
}
