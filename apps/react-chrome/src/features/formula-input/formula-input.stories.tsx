import type { Meta, StoryObj } from '@storybook/react'

import { ToastProvider } from '@ui/provider/ToastProvider'

import { FormulaInput } from './formula-input'

type FormulaInputType = typeof FormulaInput

export default {
    title: 'Chrome/FormulaInput',
    component: FormulaInput
} satisfies Meta<FormulaInputType>

export const Default: StoryObj<FormulaInputType> = {
    render: () => (
        <>
            <FormulaInput inline={false} />
            <ToastProvider />
        </>
    )
}

export const Inline: StoryObj<FormulaInputType> = {
    render: () => (
        <>
            <FormulaInput inline={false} />
            <ToastProvider />
        </>
    )
}
