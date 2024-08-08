import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@repo/ui/styles.css'

const Options = () => (
    <div>
        <p>Option</p>
    </div>
)

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('options')!).render(
    <React.StrictMode>
        <Options />
    </React.StrictMode>
)
