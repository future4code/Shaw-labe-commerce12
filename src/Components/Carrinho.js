import React from 'react';
import styled from 'styled-components'
import { ItemNoCarrinho } from './ItemNoCarrinho';

const BoxCarrinho = styled.div`
display: flex;
border: 1px solid white;
width: 18.75rem;
height: 30rem;
justify-content: center;
color: white;

`

const ItemCarrinho = styled.div`

display: flex;
border: 1px solid green;
width: 200px;
margin: 40px;


`




export class Carrinho extends React.Component{
    getValorTotal = () => {
        let ValorTotal = 0
    
        for(let produto of this.props.cards) {
          ValorTotal += produto.preco * produto.quantidade
        }
    
        return ValorTotal
      }
   
        
    
    render(){
        return <BoxCarrinho>
            <h4>Carrinho</h4>
           





        </BoxCarrinho>
    }
}