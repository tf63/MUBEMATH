export const Console = {
    log: (message: string) => {
        if (process.env.NODE_ENV !== 'production') {
            // biome-ignore lint/suspicious/noConsoleLog: <explanation>
            console.log(message)
        }
    }
}
