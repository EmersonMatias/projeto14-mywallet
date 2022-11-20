import styled from "styled-components"

export default function GeneralButton({text}){
    return(
        <Container>
            <button>{text}</button>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 48px;

    button{
        width: 85%;
        height: 48px;
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        background-color: #A328D6;
        color: #FFFFFF;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
`