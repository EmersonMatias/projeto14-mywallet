import styled from "styled-components"
import GeneralButton from "./components/GeneralButton"
import {Link }from "react-router-dom"
import GeneralInput from "./components/GeneralInput"

export default function SignUp() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <GeneralInput text="Nome" />
            <GeneralInput text="E-mail" />
            <GeneralInput text="Senha" />
            <GeneralInput text="Confirme a senha" />
            <GeneralButton text="Cadastar" />
            <Link to="/">
                <p>Ja tem uma conta? Entre agora</p>
            </Link>

        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 32px;
        line-height: 50px;
        font-weight: 400;
        color: #FFFFFF;
    }

    p{
        font-size: 15px;
        font-weight: 700;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 48px;
        cursor: pointer;
    }
`