import axios from "axios"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "../components/GeneralButton"
import GeneralInput from "../components/GeneralInput"
import MyContext from "../context/MyContext"

export default function InputValue() {
    const [inputValueData, setInputDataValue] = useState({ description: "", value: "" })
    const {config, dataUser} = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!dataUser) {
            navigate('/')
        }
    }, [])

    function dataRegisterInput(e){
        e.preventDefault()
        
        let checkDescription = inputValueData.description.length
        let checkValue = inputValueData.value

        if(!checkDescription || checkDescription < 3){
           return alert("Por favor, coloque uma descrição")
        }

        if(!checkValue  || checkValue <= 0){
            return alert("Por favor, coloque um valor válido")
        }

        const dataInput = {
            description: inputValueData.description,
            value: inputValueData.value,
            date: dayjs().format("MM/DD/YYYY"),
            type: "input"
        }

        function sucessRegister(res){
            alert(res.data)
            navigate("/inicio")
            setInputDataValue({description: "", value: ""})
        }

        axios.post("https://mywallet-api-r7d5.onrender.com/datausers", dataInput, config)
            .then((res) => {sucessRegister(res)})
            . catch((error) => {console.log(error)})
    }

    return (
        <Container>
            <header>Nova Entrada</header>

            <form onSubmit={(e) => dataRegisterInput(e)}>
                <GeneralInput text={"Valor"} type={"number"} onchange={(e) => { setInputDataValue({ ...inputValueData, value: e.target.value }) }} value={inputValueData.value}/>
                <GeneralInput text={"Descrição"} type={"text"} onchange={(e) => { setInputDataValue({ ...inputValueData, description: e.target.value }) }} value={inputValueData.description}/>
                <GeneralButton text={"Salvar entrada"} />
            </form>

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
    padding-top: 25px;

    header{
        width: 80%;
        font-size: 26px;
        font-weight: 700;
        color: #FFFFFF;
        margin-bottom: 30px;

    }

    form{
        width: 100%;
    }

`