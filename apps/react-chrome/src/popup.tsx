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
                <p className="pb-3 mt-4">Web App is available at ... (GitHub)</p>
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
