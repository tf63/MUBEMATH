import { Formula } from '@/features/formula/formula'
import { CopyBlock } from '@/features/layout/copy-block'
import type { Template } from '@/types/types'

export const FormulaTemplate = ({ template }: { template: Template }) => {
    const { formula } = template

    return (
        <CopyBlock template={template}>
            <div className="relative w-full">
                <div className="absolute right-2 top-0 rounded-md bg-slate-600 bg-opacity-15 px-1 py-0.5 text-[10px]">
                    {template.kbd}
                </div>
                <Formula inline={false} formula={formula} />
            </div>
        </CopyBlock>
    )
}
