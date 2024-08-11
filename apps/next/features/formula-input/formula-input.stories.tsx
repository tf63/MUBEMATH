import type { Meta, StoryObj } from '@storybook/react'

import { FormulaInput } from './formula-input'

type FormulaInputType = typeof FormulaInput

export default {
    title: 'Next/FormulaInput',
    component: FormulaInput
} satisfies Meta<FormulaInputType>

export const Default: StoryObj<FormulaInputType> = {
    render: () => <FormulaInput inline={true} />
}
