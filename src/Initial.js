import styled from "styled-components"
import iconQuit from "./img/iconQuit.svg"
import iconPlus from "./img/iconPlus.svg"
import iconLess from "./img/iconLess.svg"
import { useContext, useEffect, useState } from "react"
import MyContext from "./context/MyContext"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Initial() {
    const { dataUser, config } = useContext(MyContext)
    const [listDataUser, setListDataUser] = useState([])
    let totalBalance = 0;
    const navigate = useNavigate()
    console.log(listDataUser)

    console.log(dataUser)

    function totalBalanceCount(item) {
        if (item.type === "input") {
            totalBalance = totalBalance + Number(item.value)
        } else {
            totalBalance = totalBalance - Number(item.value)
        }
    }

    useEffect(() => {
        if (!dataUser) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/datausers", config)
            .then((res) => { setListDataUser(res.data) })
            .catch((error) => (console.log(error)))


    }, [totalBalance])

    return (
        <Container>

            <header>
                <p>Olá, {dataUser?.nome}</p>
                <img src={iconQuit} />
            </header>

            <div className="displayScreenContainer">
                <div className="displayScreen">
                    {listDataUser.map((item, index) => (
                        <Item type={item.type} key={index}>
                            <div className="name"><p className="data">{item.date}</p>{item.description}</div>
                            <div className="value" >{`${item.value},00`}</div>
                            {totalBalanceCount(item)}
                        </Item>
                    )

                    )}
                </div>
                <TotalBalance total={totalBalance}>
                    <p className="title">Saldo</p>
                    <p className="balance">{totalBalance},00</p>
                </TotalBalance>

            </div>

            <div className="buttons">
                <StyledLink to="/novaentrada">
                    <button className="newEntry">
                        <img src={iconPlus} />
                        <p>Nova entrada</p>
                    </button>
                </StyledLink>

                <StyledLink to="/novasaida">
                    <button className="newExit">
                        <img src={iconLess} />
                        <p>Nova saída</p>
                    </button>
                </StyledLink>

            </div>
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


        p{
            font-size: 26px;
            font-weight: 700;
            line-height: 30px;
            color: #FFFFFF;
        }
    }

    .displayScreenContainer{
        width: 85%;
        height: 70vh;
        background-color: #FFFFFF;
        border-radius: 5px;

        .displayScreen{
            width: 100%;
            height: 90%;
            border-radius: 5px;
            padding-top: 15px;
            overflow-x: scroll;
            flex-wrap: wrap;
          
           
        }

         
    }

    .buttons{
        width: 85%;
            height: 15vh;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 2vh;

            button{
            font-size: 19px;
            font-weight: 700;
            color: #FFFFFF;
            width: 100%;
            height: 100%;
            background-color: #A328D6;
            border: none;
            border-radius: 5px;

            img{
                width: 28px;
            }
        }
    }

`

const Item = styled.div`

                font-size: 16px;
                font-weight: 400;
                display: flex;
                background-color: #FFFFFF;
                justify-content: space-between;
                padding: 0 15px;
                margin-bottom: 15px;
                flex-wrap: wrap;


            .name{
                display: flex;
            color: #000000;

            .data{
                color: #C6C6C6;
             margin-right: 10px;
                    }
                }

            .value{
                color: ${props => props.type === "input" ? "green" : "red"};
                }
            
`

const TotalBalance = styled.div`
  
                width: 100%;

            display: flex;
            justify-content: space-between;
            padding: 15px 15px;

            .title, .balance {
                font-size: 24px;
            line-height: 20px;
            }

            .title{
                color: #000000;
            font-weight: 700;
            }

            .balance{
                color: ${props => props.total > 0 ? "green" : "red"};
            }
        
`


const StyledLink = styled(Link)`
    background-color: aliceblue;
    width: 40%;
    height: 80%;
`
