import styled from "styled-components"

export default function GeneralInput({text}){
    return(
        <Container>
            <input placeholder={text}></input>
        </Container>
    )
}

const Container = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;

   input{
        width: 85%;
        height: 48px;
        font-size: 20px;
        line-height: 24px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        margin-bottom: 10px;
        
        &::placeholder{
            color: #000000;
        }
    }
`