import axios from "axios"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import GeneralButton from "../components/GeneralButton"
import GeneralInput from "../components/GeneralInput"
import MyContext from "../context/MyContext"

export default function OutputValue() {
    const [outputValueData, setOutputDataValue] = useState({ description: "", value: "" })
    const {config, dataUser} = useContext(MyContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!dataUser) {
            navigate('/')
        }

    }, [])

    function dataRegisterOutput(e){
        e.preventDefault()
        
        let checkDescription = outputValueData.description.length
        let checkValue = outputValueData.value

        if(!checkDescription || checkDescription < 3){
           return  alert("Por favor, coloque uma descrição")
        }

        if(!checkValue  || checkValue <= 0){
            return  alert("Por favor, coloque um valor válido")
        }

        const dataOutput = {
            description: outputValueData.description,
            value: outputValueData.value,
            date: dayjs().format("MM/DD/YYYY"),
            type: "output"
        }

        function sucessRegister(res){
            alert(res.data)
            navigate("/inicio")
            setOutputDataValue({description: "", value: ""})
        }

        axios.post("https://mywallet-api-r7d5.onrender.com/datausers", dataOutput, config)
            .then((res) => {sucessRegister(res)})
            . catch((error) => {console.log(error)})
    }

    return (
        <Container>
            <header>Nova saida</header>

            <form onSubmit={(e) => dataRegisterOutput(e)}>
                <GeneralInput text={"Valor"} type={"number"} onchange={(e) => { setOutputDataValue({ ...outputValueData, value: e.target.value }) }} value={outputValueData.value}/>
                <GeneralInput text={"Descrição"} type={"text"} onchange={(e) => { setOutputDataValue({ ...outputValueData, description: e.target.value }) }} value={outputValueData.description}/>
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