import styled from "styled-components"

export const PrimaryContainer = styled.div`

`

export const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px 0;
`

export const Filter = styled.button`
    ${({$isActive, theme}) => $isActive ? `background: ${theme.primaryActive}; color: ${theme.neutral10};` : ''}
    margin: 0 10px;
`