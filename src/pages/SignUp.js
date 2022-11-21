import styled from "styled-components"
import GeneralButton from "../components/GeneralButton"
import { Link } from "react-router-dom"
import GeneralInput from "../components/GeneralInput"
import { useState } from "react"
import axios from "axios"

export default function SignUp() {
    const [dataSignUp, setDataSignUp] = useState({ nome: "", email: "", senha: "", confsenha: "" })

    function signUpUser(e) {
        e.preventDefault()

        let checkPassword = dataSignUp.senha?.length
        let checkName = dataSignUp.nome?.length
        let checkEmail = dataSignUp.email?.length
        let checkConfPassword = dataSignUp.confsenha === dataSignUp.senha

        if (checkPassword < 8) {
            return alert("Por favor, digite uma senha com pelo menos 8 dígitos.")
        }

        if (checkName < 3) {
            return alert("Por favor, digite um nome válido.")
        }

        if (checkEmail === 0) {
            return alert("Por favor, digite um email válido.")
        }

        if (!checkConfPassword) {
            return alert("As senhas não são iguais, digite novamente.")
        }

        let newDataSignUp = {...dataSignUp}
        delete newDataSignUp.confsenha

        function sucessSignUp(res){
            alert(res.data.message)
            setDataSignUp({ nome: "", email: "", senha: "", confsenha: "" })
        } 

        function errorSignUp(error){
            alert(error.response.data.message)
            setDataSignUp({ nome: "", email: "", senha: "", confsenha: "" })
        }


        axios.post("http://localhost:5000/signup", newDataSignUp)
                .then((res) => sucessSignUp(res))
                .catch((error) => errorSignUp(error))
    }

    return (
        <Container>
            <h1>MyWallet</h1>

            <form onSubmit={(e) => signUpUser(e)}>
                <GeneralInput text="Nome" type={"text"} onchange={(e) => (setDataSignUp({ ...dataSignUp, nome: e.target.value }))} value={dataSignUp.nome} />
                <GeneralInput text="E-mail" type={"email"} onchange={(e) => (setDataSignUp({ ...dataSignUp, email: e.target.value }))} value={dataSignUp.email} />
                <GeneralInput text="Senha" type={"password"} onchange={(e) => (setDataSignUp({ ...dataSignUp, senha: e.target.value }))} value={dataSignUp.senha} />
                <GeneralInput text="Confirme a senha" type={"password"} onchange={(e) => (setDataSignUp({ ...dataSignUp, confsenha: e.target.value }))} value={dataSignUp.confsenha} />

                <GeneralButton text="Cadastar" />
            </form>

            <StyledLink to="/">
                <p>Ja tem uma conta? Entre agora</p>
            </StyledLink>
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

    form{
        width: 100%;
        
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
`
