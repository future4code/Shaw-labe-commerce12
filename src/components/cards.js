import React from 'react';
import styled from 'styled-components'

const CardBox = styled.div`
    width: 220px ;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px;
    margin: 10px;
    p{
        display: flex;
        text-align: start;
        padding: 0 15px;
    }
    button{
        margin: 10px;
        margin-top: 0;
        padding: 5px;
        border-radius: 5px;
    }
`
const ImagensCard = styled.div`
    width:100%;
    background-image: url(${(props) => props.estampa});
    background-size: 220px 330px;
    background-repeat: no-repeat;
    padding:0;
    .img1{
        width:100%;
        transition: 0.8s;
        opacity: 100%;
    }
    :hover{
        .img1{
            transition: 0.8s;
            opacity: 0%;
        }
    }
`

class Cards extends React.Component {
    state = {
       
    }
    
    render() {
        return(
            <CardBox>
                <ImagensCard estampa={this.props.fotoEstampa}>
                     <img className='img1' src={this.props.fotoProduto} alt={'Camiseta'}></img>
                </ImagensCard>
            <div>
                <p>{this.props.descricao} </p>
                <p>{this.props.preco} R$</p>
            </div>
            <button>Adicionar ao carrinho</button>
            </CardBox>
        )
    }
}

export default Cards