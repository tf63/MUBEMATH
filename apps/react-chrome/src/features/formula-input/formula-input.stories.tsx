import { FormulaInput } from './formula-input'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaInputType = typeof FormulaInput

export default {
    title: 'Chrome/FormulaInput',
    component: FormulaInput,
} satisfies Meta<FormulaInputType>

export const Default: StoryObj<FormulaInputType> = {
    render: () => <FormulaInput inline={true} />,
}
