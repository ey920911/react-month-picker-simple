import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BasicExample from './playground/basicExample'
import CustomizedExample from './playground/CustomizedExample'

// Playground
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <>
        <BasicExample />
        <CustomizedExample />
    </>,
)
