import type { Meta, StoryObj } from '@storybook/react'

import { Formula } from './formula'

type FormulaType = typeof Formula

export default {
    title: 'Components/Formula',
    component: Formula
} satisfies Meta<FormulaType>

export const Default: StoryObj<FormulaType> = {
    render: () => <Formula formula="\sum_i^N a_n" inline={false} />
}

export const Inline: StoryObj<FormulaType> = {
    render: () => <Formula formula="\sum_i^N a_n" inline={true} />
}
