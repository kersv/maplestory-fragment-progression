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

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    max-width: fit-content;
    width: 100%;
    display: flex;
    height: 100vh;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;

export const Button = styled.button`
    background: transparent;
    color: white;
    outline: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1.5em;
    border: none;
`