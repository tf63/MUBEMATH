import React from 'react'
import ReactDOM from 'react-dom/client'

import { FormulaInput } from '@chrome/features/formula-input'
import { Provider } from '@chrome/provider'

import './index.css'

const Popup = () => {
    return (
        <Provider>
            <div className="h-screen p-5">
                <FormulaInput inline={false} />
                <p className="mt-4 pb-3 text-slate-400">
                    Web App is available at{' '}
                    <a
                        className="text-secondary underline"
                        href="https://mubemath.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://mubemath.vercel.app
                    </a>{' '}
                    (
                    <a
                        className="text-secondary underline"
                        href="https://github.com/tf63/MUBEMATH"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    )
                </p>
            </div>
        </Provider>
    )
}

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Popup />
    </React.StrictMode>
)
