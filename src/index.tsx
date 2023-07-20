import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MonthPicker from 'react-month-picker-simple';
import App from './MonthPicker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>
    <MonthPicker handleChange ={(date: any)=> {}}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// export {default} from './MonthPicker'