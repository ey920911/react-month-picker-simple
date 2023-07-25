import React from 'react'
import styled from 'styled-components'
import BasicExample from './playground/BasicExample'
import CustomizedExample from './playground/CustomizedExample'

export default function App() {
    return (
        <StyledPlaygroundWrapper>
            <BasicExample />
            <CustomizedExample />
        </StyledPlaygroundWrapper>
    )
}
const StyledPlaygroundWrapper = styled.div`
    margin: 30px 200px;

    //mobile
    @media (max-width: 767px) {
        margin: 30px 10px;
    }
`
