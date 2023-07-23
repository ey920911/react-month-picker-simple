import React, { CSSProperties, useEffect, useState } from 'react'
import { css, styled } from 'styled-components'

interface IMonthPickerProps {
    handleChange: (date: Date) => void
    minYear?: number
    maxYear?: number
    language?: 'en' | 'ko' | 'zh' | 'ja'
    customMonth?: string[]
    styleTheme?: 'light' | 'dark' | 'blue' | 'red'
    buttonStyle?: CSSProperties
    selectedButtonStyle?: CSSProperties
}

const months = {
    ko: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ja: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    zh: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
}

const MonthPicker = (props: IMonthPickerProps) => {
    const {
        minYear = new Date().getFullYear() - 20,
        maxYear = new Date().getFullYear(),
        language = 'en',
        customMonth,
        buttonStyle,
        selectedButtonStyle,
        handleChange,
    } = props

    const monthList = customMonth || months[language]
    const [yearList, setYearList] = useState<number[]>([])
    const [currentYearIdx, setCurrentYearIdx] = useState<number>(maxYear - minYear)
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth())

    useEffect(() => {
        for (let year = minYear; year <= maxYear; year++) {
            setYearList((prev) => [...prev, year])
        }
    }, [])

    useEffect(() => {
        handleChange(new Date(currentYearIdx + minYear, currentMonth))
    }, [currentYearIdx, currentMonth])

    return (
        <StyledMonthPickerWrapper>
            <StyledArrowWrapper>
                <StyledArrowButton
                    isClickable={currentYearIdx > 0}
                    onClick={() => {
                        if (currentYearIdx > 0) setCurrentYearIdx((prev) => prev - 1)
                    }}
                    style={{ border: 'white', backgroundColor: 'white' }}
                >
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none">
                            <path d="M0 0h16v16H0z" />
                            <path fill="#3E6CDF" d="m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7z" />
                        </g>
                    </svg>
                </StyledArrowButton>
                <div>{yearList[currentYearIdx]}</div>
                <StyledArrowButton
                    isClickable={currentYearIdx + 2 <= yearList.length}
                    style={{ border: 'white', backgroundColor: 'white' }}
                    onClick={() => {
                        if (currentYearIdx + 2 <= yearList.length) setCurrentYearIdx((prev) => prev + 1)
                    }}
                >
                    <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none">
                            <path d="M0 0h16v16H0z" />
                            <path fill="#3E6CDF" d="m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3z" />
                        </g>
                    </svg>
                </StyledArrowButton>
            </StyledArrowWrapper>
            <StyledMonthsWrapper>
                {monthList.map((month, index) =>
                    currentMonth === index ? (
                        <StyledSelectedMonth
                            key={`month-item-${index}`}
                            id={`${index}`}
                            style={selectedButtonStyle}
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                                const selectedMonth = parseInt(e.currentTarget.id)
                                setCurrentMonth(selectedMonth)
                                // handleChange(new Date(currentYearIdx + minYear, currentMonth))
                            }}
                        >
                            {month}
                        </StyledSelectedMonth>
                    ) : (
                        <StyledMonth
                            key={`month-item-${index}`}
                            id={`${index}`}
                            style={buttonStyle}
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                                const selectedMonth = parseInt(e.currentTarget.id)
                                setCurrentMonth(selectedMonth)
                                // handleChange(new Date(currentYearIdx + minYear, currentMonth))
                            }}
                        >
                            {month}
                        </StyledMonth>
                    ),
                )}
            </StyledMonthsWrapper>
        </StyledMonthPickerWrapper>
    )
}
export default MonthPicker

const StyledMonthPickerWrapper = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 0;
`
const StyledArrowWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;
`

const StyledMonthsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const StyledMonth = styled.button`
    flex: 1 1 33%;
    height: 50px;
    cursor: pointer;
`

const StyledSelectedMonth = styled.button`
    flex: 1 1 33%;
    height: 50px;
    background-color: #cbcdd1;
    border: 1px solid gray;
`

const StyledArrowButton = styled.button<{ isClickable?: boolean }>`
    ${({ isClickable }) =>
        isClickable &&
        css`
            cursor: pointer;
        `}
`
