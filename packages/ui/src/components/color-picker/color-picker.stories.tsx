import { ColorPicker } from './color-picker'

import type { Meta, StoryObj } from '@storybook/react'
import { useColor } from 'react-color-palette'

type ColorPickerType = typeof ColorPicker

export default {
    title: 'Components/ColorPicker',
    component: ColorPicker,
} satisfies Meta<ColorPickerType>

const ColorPickerWithState = () => {
    const [color, setColor] = useColor('#000000FF')

    return (
        <div className="flex justify-center items-center h-screen">
            <ColorPicker color={color} setColor={setColor} />
        </div>
    )
}

export const Default: StoryObj<ColorPickerType> = {
    render: () => <ColorPickerWithState />,
}
