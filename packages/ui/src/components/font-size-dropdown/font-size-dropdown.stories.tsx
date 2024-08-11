import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { FontSizeDropdown } from './font-size-dropdown'

type FontSizeDropdownType = typeof FontSizeDropdown

export default {
    title: 'Components/FontSizeDropdown',
    component: FontSizeDropdown
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
        <div className="flex h-screen items-center justify-center">
            <FontSizeDropdownWithState />
        </div>
    )
}
