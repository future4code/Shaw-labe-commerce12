import React from 'react';
import styled from 'styled-components'

const BoxCarrinho = styled.div`
display: flex;
border: 2px black;

`
export class Carrinho extends React.Component{
    render(){
        return <BoxCarrinho>Olá</BoxCarrinho>
    }
}