
react-month-picker-simple is simplest month picker.

# Installation

```shell
npm install react-month-picker-simple
```


# Simple example
## basic style

[!initial](https://github.com/ey920911/react-month-picker-simple/blob/main/docs/image/defaultStyle.png)



```
import React, { CSSProperties } from 'react';
import MonthPicker from 'react-month-picker-simple';

export default function () {
    return (
        <div style={{width:'300px'}}>
            <MonthPicker handleChange={(date: Date)=> {}}/>
        </div>
    )   
}

```

## customize style


```
import React, { CSSProperties } from 'react';
import MonthPicker from 'react-month-picker-simple';

const BaseButtonStyle: CSSProperties ={
  backgroundColor: 'blue',
  border:'1px solid white',
  color:'white'
}

const SelectedStyle: CSSProperties ={
  backgroundColor: 'white',
  color:'black'
}

export default function () {
    return (
        <div style={{width:'300px'}}>
            <MonthPicker language='zh' buttonStyle={BaseButtonStyle} selectedButtonStyle={SelectedStyle} handleChange={(date: Date)=> {}}/>
        </div>
    )   
}

```

# Props

All props list of react-month-picker-simple.


| Name             | Required       | Type                                             | Default                       | Description                                                                                                     |
| ---------------- | --------------- | ------------------------------------------------ | ----------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **handleChange**     |true    | (date: Date) => void                                           | 1                             | The function to catch changed date               |
| **minYear**       |false | number                                           | currentYear - 20                          | The value of minium year to select year                                          |
| **maxYear**    |false | function                                         | current year                      | The value of maxium year to select year |
| **language**        |false  | 'en', 'ko', 'zh' | 'ja'                                           | 'en'                             | The language info  |
| **customMonth**         |false | string[]                                           | []                           | The customed month info |
| **buttonStyle**            |false | CSSProperties |                            | The button style not selected
| **selectedButtonStyle**      |false  | CSSProperties                                           |            | The button style that selected
