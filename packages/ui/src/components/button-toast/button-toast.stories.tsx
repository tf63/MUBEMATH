import { ButtonToast } from './button-toast'

import type { Meta, StoryObj } from '@storybook/react'

type ButtonToastType = typeof ButtonToast

export default {
    title: 'ButtonToast',
    component: ButtonToast,
} satisfies Meta<ButtonToastType>

export const Default: StoryObj<ButtonToastType> = {
    render: () => <ButtonToast />,
}
