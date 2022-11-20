
import { Link } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "./components/GeneralButton"
import GeneralInput from "./components/GeneralInput"

export default function SignIn() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <GeneralInput text="Email" />
            <GeneralInput text="Senha" />
            <GeneralButton text="Entrar" />

            <Link to="/cadastrar">
                <p>Primeira vez? Cadastre-se</p>
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
        cursor: pointer;
    }
`