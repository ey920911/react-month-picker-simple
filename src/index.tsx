import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import MonthPicker from 'react-month-picker-simple';
import MonthPicker from './lib/MonthPicker'
import BasicExample from './playground/basicExample'

const baseStyleEx: CSSProperties = {
    backgroundColor: 'blue',
    border: '1px solid white',
    color: 'white',
}

const selectedStyleEx: CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
}

// Playground
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
