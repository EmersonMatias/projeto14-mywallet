import styled from "styled-components"
import iconQuit from "../../img/iconQuit.svg"
import { useContext, useEffect, useState } from "react"
import MyContext from "../../context/MyContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import DisplayScreen from "./DisplayScreen"
import ButtonsInitial from "./ButtonsInitial"

export default function Initial() {
    const { dataUser, config, setDataUser } = useContext(MyContext)
    const [listDataUser, setListDataUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (!dataUser) {
            navigate('/')
        }
    }, [dataUser])

    useEffect(() => {
        axios.get("http://localhost:5000/datausers", config)
            .then((res) => { setListDataUser(res.data) })
            .catch((error) => (console.log(error)))
    },)

    function exitAccount() {
        setDataUser()
    }

    return (
        <Container>
            <header>
                <p>Olá, {dataUser?.nome}</p>
                <img src={iconQuit} onClick={exitAccount} alt="iconQuit" />
            </header>

            <DisplayScreen listDataUser={listDataUser} />

            <ButtonsInitial />
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8C11BE;
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        width: 85%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 3vh;

        img{
            cursor: pointer;
        }

        p{
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            color: #FFFFFF;
        }
    }
`
