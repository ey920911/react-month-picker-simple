import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import MonthPicker from 'react-month-picker-simple';
import MonthPicker from './lib/MonthPicker'
import BasicExample from './playground/basicExample'
import CustomizedExample from './playground/CustomizedExample'

// Playground
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <>
        {/* <BasicExample />
        <CustomizedExample /> */}
        <div>test</div>
    </>,
)
