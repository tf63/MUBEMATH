import type { Template } from '@ui/types/types'
import { FormulaTemplate } from './formula-template'

import type { Meta, StoryObj } from '@storybook/react'

type FormulaTemplateType = typeof FormulaTemplate

export default {
    title: 'Next/FormulaTemplate',
    component: FormulaTemplate,
} satisfies Meta<FormulaTemplateType>

const template: Template = {
    type: 'layout',
    kbd: '0',
    formula: 'a = b',
}

export const Default: StoryObj<FormulaTemplateType> = {
    render: () => <FormulaTemplate template={template} />,
}
