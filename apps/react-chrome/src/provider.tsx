import { ToastProvider } from '@/provider/ToastProvider'

export const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
            <ToastProvider />
        </>
    )
}
