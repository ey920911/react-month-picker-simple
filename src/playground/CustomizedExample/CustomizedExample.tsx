import React, { CSSProperties, useState } from 'react'
import MonthPicker from 'react-month-picker-simple'
import styled from 'styled-components'

const baseStyleEx: CSSProperties = {
    backgroundColor: 'blue',
    border: '1px solid white',
    color: 'white',
}

const selectedStyleEx: CSSProperties = {
    backgroundColor: 'white',
    color: 'black',
}

const CustomizedExample = () => {
    const [baseStyle, setBaseStyle] = useState<object>(baseStyleEx)
    const [selectedStyle, setSelectedStyle] = useState<object>(selectedStyleEx)

    return (
        <StyledExampleWrapper>
            <StyledTitle>{'Customizing Style'}</StyledTitle>
            <StyledExampleContentsWrapper>
                <StyledMonthPickerWrapper>
                    <MonthPicker
                        language={'ko'}
                        handleChange={(date: Date) => {}}
                        buttonStyle={baseStyle}
                        selectedButtonStyle={selectedStyle}
                    />
                </StyledMonthPickerWrapper>
                <StyledOptionsWrapper>
                    <h3>Base Button Style</h3>
                    <StyledTextArea
                        onChange={(e) => {
                            const { value } = e.target
                            if (checkJsonType(value)) {
                                setBaseStyle(JSON.parse(value))
                            }
                        }}
                    >
                        {JSON.stringify(baseStyle)}
                    </StyledTextArea>
                    <h3>Selected Button Style</h3>
                    <StyledTextArea
                        onChange={(e) => {
                            const { value } = e.target
                            if (checkJsonType(value)) setSelectedStyle(JSON.parse(value))
                        }}
                    >
                        {JSON.stringify(selectedStyle)}
                    </StyledTextArea>
                </StyledOptionsWrapper>
            </StyledExampleContentsWrapper>
        </StyledExampleWrapper>
    )
}
export default CustomizedExample

const checkJsonType = (str: string) => {
    try {
        var json = JSON.parse(str)
        return typeof json === 'object'
    } catch (e) {
        return false
    }
}

const StyledExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 200px 0 200px;
`

const StyledExampleContentsWrapper = styled.div`
    display: flex;
`

const StyledTitle = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
`

const StyledOptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 80px;
`

const StyledMonthPickerWrapper = styled.div`
    width: 100%;
    margin-right: 50px;
    padding-right: 50px;
    min-width: 200px;
`

export { StyledExampleContentsWrapper, StyledExampleWrapper, StyledMonthPickerWrapper, selectedStyleEx }
