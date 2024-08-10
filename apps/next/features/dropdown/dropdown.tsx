'use client'

import { useCloseRef } from '@/hooks/use-close-ref'

type DropdownProps = {
    summary: string
    children: React.ReactNode
}

export const Dropdown = ({ summary, children }: DropdownProps) => {
    const { closeRef } = useCloseRef()
    return (
        <details className="dropdown dropdown-top" ref={closeRef}>
            <summary
                className="btn min-w-[160px] font-semibold shadow-btn hover:border-transparent hover:bg-base-200"
                tabIndex={-1}
            >
                {summary}
            </summary>
            <div className="dropdown-content z-50 mb-5 flex w-60 items-center justify-center rounded-lg bg-base-200 p-5 shadow-btn">
                {children}
            </div>
        </details>
    )
}