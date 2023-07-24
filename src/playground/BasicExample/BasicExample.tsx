import React, { useState } from 'react'
import MonthPicker from 'react-month-picker-simple'
import styled from 'styled-components'

const BasicExample = () => {
    const [language, setLanguage] = useState<'en' | 'zh' | 'ko' | 'ja'>('en')
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())
    return (
        <StyledExampleWrapper>
            <StyledTitle>{'Basic Style'}</StyledTitle>
            <StyledExampleContentsWrapper>
                <StyledMonthPickerWrapper>
                    <MonthPicker
                        language={language}
                        handleChange={(date: Date) => {
                            setSelectedDate(date)
                        }}
                    />
                </StyledMonthPickerWrapper>
                <StyledOptionsWrapper>
                    <h3>Select Languge</h3>
                    <StyledLanguageWrapper>
                        <input
                            id="en"
                            type="radio"
                            value={'en'}
                            name={'en'}
                            onClick={() => {
                                setLanguage('en')
                            }}
                            checked={language === 'en'}
                        />
                        <StyledLabel>en-US</StyledLabel>
                        <input
                            id="ko"
                            type="radio"
                            value="ko"
                            name="ko"
                            onClick={() => {
                                setLanguage('ko')
                            }}
                            checked={language === 'ko'}
                        />
                        <StyledLabel>ko-KR</StyledLabel>
                        <input
                            id="zh"
                            type="radio"
                            value="zh"
                            name="zh"
                            onClick={() => {
                                setLanguage('zh')
                            }}
                            checked={language === 'zh'}
                        />
                        <StyledLabel>zh-CN</StyledLabel>
                        <input
                            id="ja"
                            type="radio"
                            value="ja"
                            name="ja"
                            onClick={() => {
                                setLanguage('ja')
                            }}
                            checked={language === 'ja'}
                        />
                        <StyledLabel>ja-JP</StyledLabel>
                    </StyledLanguageWrapper>
                    <h3 style={{ marginTop: '50px' }}>Selected Date</h3>
                    <div>{selectedDate.toString()}</div>
                </StyledOptionsWrapper>
            </StyledExampleContentsWrapper>
        </StyledExampleWrapper>
    )
}
export default BasicExample

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
    margin-top: 50px;
    width: 100%;
`

const StyledLanguageWrapper = styled.div`
    display: flex;
    align-items: center;
`

const StyledLabel = styled.div`
    margin: 5px 10px 0 5px;
`

const StyledMonthPickerWrapper = styled.div`
    width: 100%;
    margin-right: 50px;
    padding-right: 50px;
    min-width: 200px;
`
