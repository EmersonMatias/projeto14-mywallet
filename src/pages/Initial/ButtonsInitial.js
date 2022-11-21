import { Link } from "react-router-dom"
import styled from "styled-components"
import iconPlus from "../../img/iconPlus.svg"
import iconLess from "../../img/iconLess.svg"

export default function ButtonsInitial() {
    return (
        <Container>
            <StyledLink to="/novaentrada">
                <button className="newEntry">
                    <img src={iconPlus} alt="iconPlus"/>
                    <p>Nova entrada</p>
                </button>
            </StyledLink>

            <StyledLink to="/novasaida">
                <button className="newExit">
                    <img src={iconLess} alt="iconLess"/>
                    <p>Nova saída</p>
                </button>
            </StyledLink>
        </Container>
    )
}

const Container = styled.div`
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
        cursor: pointer;

        img{
            width: 28px;
        }
    }
    
`
const StyledLink = styled(Link)`
    width: 40%;
    height: 80%;
`