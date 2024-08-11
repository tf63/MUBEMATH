import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './dropdown'

type DropdownType = typeof Dropdown

export default {
    title: 'Components/Dropdown',
    component: Dropdown
} satisfies Meta<DropdownType>

export const Default: StoryObj<DropdownType> = {
    render: () => (
        <div className="flex h-screen justify-center items-center">
            <Dropdown summary="default">content</Dropdown>
        </div>
    )
}
