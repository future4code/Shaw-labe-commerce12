import React from 'react';
import styled from 'styled-components'
import Header from "./components/Header";
import { Carrinho } from './components/Carrinho';
import Filtros from './components/filtro';
import Cards from './components/cards';
import card1 from './img_cards/Card1.png'
import estampaCard1 from './img_cards/Estampa_Card1.png'
import card2 from './img_cards/Card2.png'
import estampaCard2 from './img_cards/Estampa_Card2.png'
import card3 from './img_cards/Card3.png'
import estampaCard3 from './img_cards/Estampa_Card3.png'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Main =styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color:#1e1e1e;
`

const CardContainer = styled.div`
    width:980px;
    margin: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

class App extends React.Component {
  state= {
    cards:[
      {
        fotoProduto: card1,
        fotoEstampa: estampaCard1,
        descricao:'Camiseta Branca Astronauta - Masculina',
        preco:'80',
      },
      {
        fotoProduto: card2,
        fotoEstampa: estampaCard2,
        descricao:'Camiseta Branca Astronauta - Feminina',
        preco:'81',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'82',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'83',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'84',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'85',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'86',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'87',
      },
    ],
    precoMin: "",
    precoMax: "",
  }

  updatePrecoMin = (dig) => {
    this.setState({precoMin: dig.target.value})
  }
  updatePrecoMax = (dig) => {
    this.setState({precoMax: dig.target.value})
  }

  render(){

    const listaFiltrada = this.state.cards.filter((card) => {
      return this.state.precoMin === "" || card.preco >= this.state.precoMin
    }).filter((card) => {
      return this.state.precoMax === "" || card.preco <= this.state.precoMax
    }).map((card) => {
      return (

          <Cards
          fotoProduto = {card.fotoProduto}
          fotoEstampa ={card.fotoEstampa}
          descricao = {card.descricao}
          preco = {card.preco}
          />  
      )
    });

    return (
      <MainContainer>
        <Header />
        <Main>
          <Filtros
            precoMin= {this.state.precoMin}
            precoMaxn= {this.state.precoMax}
            updatePrecoMin={this.updatePrecoMin}
            updatePrecoMax={this.updatePrecoMax}
          />
          <CardContainer>
            {listaFiltrada} 
          </CardContainer>
        </Main>  
      </MainContainer>  
    );
  } 
}

export default App;
