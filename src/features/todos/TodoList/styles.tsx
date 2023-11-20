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
    ${({$isActive, theme}) => $isActive ? `background: ${theme.primaryActive};` : ''}
    margin: 0 10px;
    &:hover {
        transition: opacity 0.25s;
        ${({$isActive, theme}) => $isActive ? `
            background: ${theme.primaryActive};
            opacity: 0.7;` : ''
        }
    }
`