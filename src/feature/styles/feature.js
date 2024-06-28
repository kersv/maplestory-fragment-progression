import styled, {css} from "styled-components";

export const StyledTracker = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: 450px;

    h4{
        margin-left:10px;
    }
`

export const StyledSkill = styled.small`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const StyledInput = styled.input`
    width: 3.4em;
    padding: 0.5em;
    font-size: 1em;
`

export const StyledFragDisplay = styled.div`
    display: flex;
    align-items: center;
`

export const StyledContainer = styled.div`
    display:flex;
    gap: 10px;
    margin: 10px;
    width: 400px;

    span{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
`