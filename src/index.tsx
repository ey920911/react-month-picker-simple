import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'
// import MonthPicker from 'react-month-picker-simple';
import MonthPicker from './lib/MonthPicker'
// import BasicExample from './playground/basicExample'

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
root.render(
    <>
        <div style={{ width: '300px' }}>
            <MonthPicker handleChange={(date: any) => {}} />
        </div>
        <div style={{ width: '300px' }}>
            <MonthPicker minYear={2020} language="ko" handleChange={(date: any) => {}} />
        </div>
        <div style={{ width: '300px' }}>
            <MonthPicker
                language="zh"
                buttonStyle={baseStyleEx}
                selectedButtonStyle={selectedStyleEx}
                handleChange={(date: any) => {}}
            />
        </div>
    </>,
    // <>
    //     <div style={{ display: 'flex', width: '500px' }}>
    //         <div style={{ width: '300px', margin: '0 100px 0 100px' }}>
    //             <MonthPicker
    //                 handleChange={(date: any) => {
    //                     // alert(`Select Date : ${date} `)
    //                 }}
    //             />
    //         </div>
    //         <div style={{ display: 'flex', width: '100px', alignItems: 'center' }}>
    //             <div style={{ alignItems: 'center' }}>ko</div>
    //             <input type="radio" name="KO" value="ko" />
    //             <div style={{ alignItems: 'center' }}>en</div>
    //             <input type="radio" name="EN" value="en" />
    //             <div style={{ alignItems: 'center' }}>zh</div>
    //             <input type="radio" name="ZH" value="zh" />
    //         </div>
    //     </div>
    // </>,
)
