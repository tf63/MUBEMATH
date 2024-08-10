import { ToastProvider } from '@ui/provider/ToastProvider'

export const Provider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            {children}
            <ToastProvider />
        </>
    )
}
