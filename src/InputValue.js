import axios from "axios"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "./components/GeneralButton"
import GeneralInput from "./components/GeneralInput"
import MyContext from "./context/MyContext"



export default function InputValue() {
    const [inputValueData, setInputDataValue] = useState({ description: "", value: "" })
    const {config, dataUser} = useContext(MyContext)
    const navigate = useNavigate()
    console.log(inputValueData)

    useEffect(() => {
        if (!dataUser) {
            navigate('/')
        }

    }, [])

    function dataRegister(e){
        e.preventDefault()
        
        let checkDescription = inputValueData.description.length
        let checkValue = inputValueData.value

        if(!checkDescription){
            alert("Por favor, coloque uma descrição")
        }

        if(!checkValue  || checkValue < 0){
            alert("Por favor, coloque um valor válido")
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

        axios.post("http://localhost:5000/datausers", dataInput, config)
                .then((res) => {sucessRegister(res)})
                . catch((error) => {console.log(error)})

        

    }

    return (
        <Container>
            <header>Nova Entrada</header>

            <form onSubmit={(e) => dataRegister(e)}>
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