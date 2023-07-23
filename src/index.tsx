import React, { CSSProperties } from 'react';
import ReactDOM from 'react-dom/client';
// import MonthPicker from 'react-month-picker-simple';
import MonthPicker from './lib/MonthPicker';

const baseStyleEx: CSSProperties ={
  backgroundColor: 'blue',
  border:'1px solid white',
  color:'white'
}

const selectedStyleEx: CSSProperties ={
  backgroundColor: 'white',
  color:'black'
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <div style={{width:'300px'}}>
    <MonthPicker handleChange={(date: any)=> {}}/>
  </div>
  <div style={{width:'300px'}}>
    <MonthPicker minYear={2020} language='ko' handleChange={(date: any)=> {}}/>
  </div> 
  <div style={{width:'300px'}}>
    <MonthPicker language='zh' buttonStyle={baseStyleEx} selectedButtonStyle={selectedStyleEx} handleChange={(date: any)=> {}}/>
  </div>
  
</>
);