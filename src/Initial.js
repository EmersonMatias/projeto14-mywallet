import styled from "styled-components"
import iconQuit from "./img/iconQuit.svg"
import iconPlus from "./img/iconPlus.svg"
import iconLess from "./img/iconLess.svg"

export default function Initial() {
    return (
        <Container>
            <header>
                <p>Olá, Fulano</p>
                <img src={iconQuit} />
            </header>

            <div className="displayScreenContainer">
                <div className="displayScreen">
                    <div className="item">
                        <div className="name"><p className="data">31/11</p>Almoço mãe</div>
                        <div className="value">39,90</div>
                    </div>
                </div>
                <div className="totalBalance">
                    <p className="title">Saldo</p>
                    <p className="balance">2849,46</p>
                </div>
            </div>

            <div className="buttons">
                <button className="newEntry">
                    <img src={iconPlus} />
                    <p>Nova entrada</p>

                </button>
                <button className="newExit">
                    <img src={iconLess}/>
                    <p>Nova saída</p>
                </button>
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

            .item{
                font-size: 16px;
                font-weight: 400;
                display: flex;
                background-color: #FFFFFF;
                justify-content: space-between;
                padding: 0 15px;
                margin-bottom: 15px;
                


                .name{
                    display: flex;
                    color: #000000;

                    .data{
                        color: #C6C6C6;
                        margin-right: 10px;
                    }
                }

                .value{
                    color: #C70000;
                }
            }
        }

        .totalBalance{
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
                color: #03AC00;
            }
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
            width: 47%;
            height: 85%;
            background-color: #A328D6;
            border: none;
            border-radius: 5px;

            img{
                width: 28px;
            }
        }
    }
`