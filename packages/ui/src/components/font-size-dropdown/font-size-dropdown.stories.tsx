import { useState } from 'react'
import { FontSizeDropdown } from './font-size-dropdown'

import type { Meta, StoryObj } from '@storybook/react'

type FontSizeDropdownType = typeof FontSizeDropdown

export default {
    title: 'Components/FontSizeDropdown',
    component: FontSizeDropdown,
} satisfies Meta<FontSizeDropdownType>

const FontSizeDropdownWithState = () => {
    const [fontSize, setFontSize] = useState('16px')

    return (
        <div>
            <FontSizeDropdown fontSize={fontSize} setFontSize={setFontSize} />
        </div>
    )
}

export const Default: StoryObj<FontSizeDropdownType> = {
    render: () => (
        <div className="flex justify-center items-center h-screen">
            <FontSizeDropdownWithState />
        </div>
    ),
}
