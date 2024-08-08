import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@repo/ui/styles.css'
import { FormulaInput } from '@/features/formula-input'
import { Provider } from '@/provider'

const Popup = () => {
    return (
        <Provider>
            <div className="h-screen bg-base-200 p-5">
                <FormulaInput inline={false} />
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
