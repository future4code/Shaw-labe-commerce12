import React from 'react';
import styled from 'styled-components'
import Cards from './components/cards';
import card1 from './img_cards/Card1.png'
import estampaCard1 from './img_cards/Estampa_Card1.png'
import card2 from './img_cards/Card2.png'
import estampaCard2 from './img_cards/Estampa_Card2.png'
import card3 from './img_cards/Card3.png'
import estampaCard3 from './img_cards/Estampa_Card3.png'

const CardContainer = styled.div`
    background-color: lightblue;
    display: flex;
    flex-flow: row wrap;
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
        preco:'80',
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'80',
      },
    ]
  }

  render(){

    const listaDeCards = this.state.cards.map((card) => {
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
        <CardContainer>
          {listaDeCards}    
        </CardContainer>
    );
  } 
}

export default App;
