import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { FontSizeSlider } from './font-size-slider'

type FontSizeSliderType = typeof FontSizeSlider

export default {
    title: 'Components/FontSizeSlider',
    component: FontSizeSlider
} satisfies Meta<FontSizeSliderType>

const FontSizeSliderWithState = () => {
    const [fontSize, setFontSize] = useState(16)

    return (
        <div>
            <FontSizeSlider fontSize={fontSize} setFontSize={setFontSize} />
        </div>
    )
}

export const Default: StoryObj<FontSizeSliderType> = {
    render: () => (
        <div className="flex justify-center items-center h-screen">
            <FontSizeSliderWithState />
        </div>
    )
}
