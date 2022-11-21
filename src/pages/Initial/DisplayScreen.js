import styled from "styled-components"

export default function DisplayScreen({listDataUser}) {
    let totalBalance = 0;

    function totalBalanceCount(item) {
        if (item.type === "input") {
            totalBalance = totalBalance + Number(item.value)
        } else {
            totalBalance = totalBalance - Number(item.value)
        }
    }
   
    return (
        <Container>
            <div className="displayScreen">
                {listDataUser.map((item, index) => (
                    <Item type={item.type} key={index}>
                        <div className="name"><p className="data">{item.date}</p>{item.description}</div>
                        <div className="value" >{`${Number(item.value).toFixed(2).replace(".", ",")}`}</div>
                        {totalBalanceCount(item)}
                    </Item>
                )

                )}
            </div>
            <TotalBalance total={totalBalance}>
                <p className="title">Saldo</p>
                <p className="balance">{totalBalance.toFixed(2).replace(".", ",")}</p>
            </TotalBalance>
        </Container>
    )
}

const Container = styled.div`
    width: 85%;
    height: 70vh;
    background-color: #FFFFFF;
    border-radius: 5px;
        

    .displayScreen{
        width: 100%;
        height: 90%;
        border-radius: 5px;
        padding-top: 15px;
        overflow-y: scroll;
        flex-wrap: wrap;
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
        width: 80%;
        white-space: nowrap;
        color: #000000;
        overflow: hidden;
        text-overflow: ellipsis;    

        .data{
            color: #C6C6C6;
            margin-right: 10px;
            display: inline;
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
