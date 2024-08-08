export const Console = {
    log: (message: string) => {
        if (import.meta.env.DEV) {
            // biome-ignore lint/suspicious/noConsoleLog: <explanation>
            console.log(message)
        }
    },
}
