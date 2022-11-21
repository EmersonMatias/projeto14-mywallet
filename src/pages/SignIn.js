
import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "../components/GeneralButton"
import GeneralInput from "../components/GeneralInput"
import MyContext from "../context/MyContext"

export default function SignIn() {
    const [dataLogin, setDataLogin] = useState({ email: "", senha: "" })
    const {setDataUser} = useContext(MyContext)
    const navigate = useNavigate()

    function signInUser(e){
        e.preventDefault()
        let checkPassword = dataLogin.senha?.length
        let checkEmail = dataLogin.email?.length

        if(checkPassword < 8){
            return alert("Por favor, digite a senha uma senha valida")
        }
        if(checkEmail === 0){
            return alert("Por favor, digite o email")
        }

        //FUNÇÃO ERRO LOGIN
        function errorSignIn(error){
           alert(error.response?.data)
        }

        // FUNÇÃO SUCESSO LOGIN
        function sucessSignIn(res){
            setDataUser({nome: res.data.nome, token: res.data.token})
            navigate("/inicio")
            setDataLogin({ email: "", senha: "" })
        }

        // REQUISIÇÃO LOGIN
        axios.post("https://mywallet-api-r7d5.onrender.com/signin", dataLogin)
            .then((res) =>  sucessSignIn(res))
            .catch((error) =>  errorSignIn(error))
    }

    return (
        <Container>
            <h1>MyWallet</h1>

            <form onSubmit={(e)=> signInUser(e)}>
                <GeneralInput text="Email" type={"email"} onchange={(e) => (setDataLogin({...dataLogin, email: e.target.value}))} value={dataLogin.email}/>
                <GeneralInput text="Senha" type={"password"} onchange={(e) => (setDataLogin({...dataLogin, senha: e.target.value}))} value={dataLogin.senha}/>
                <GeneralButton text="Entrar" />

            </form>

            <StyledLink to="/cadastrar">
                <p>Primeira vez? Cadastre-se</p>
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
