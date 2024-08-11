import { useColor } from 'react-color-palette'
import { ColorFields } from './color-fields'

import type { Meta, StoryObj } from '@storybook/react'

type ColorFieldsType = typeof ColorFields

export default {
    title: 'Chrome/ColorFields',
    component: ColorFields,
} satisfies Meta<ColorFieldsType>

const ColorFieldsWithState = () => {
    const [color, setColor] = useColor('#000000FF')
    return <ColorFields color={color} onChange={setColor} hideInput={[]} />
}

export const Default: StoryObj<ColorFieldsType> = {
    render: () => <ColorFieldsWithState />,
}
