import type { Template } from '@ui/types/types'
import { CopyBlock } from './copy-block'

import type { Meta, StoryObj } from '@storybook/react'
import { ToastProvider } from '@ui/provider/ToastProvider'

type CopyBlockType = typeof CopyBlock

export default {
    title: 'Components/CopyBlock',
    component: CopyBlock,
} satisfies Meta<CopyBlockType>

const template: Template = {
    type: 'layout',
    kbd: '0',
    formula: 'a = b',
}

export const Default: StoryObj<CopyBlockType> = {
    render: () => (
        <>
            <CopyBlock template={template}>a = b</CopyBlock>
            <ToastProvider />
        </>
    ),
}
