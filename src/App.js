import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header';
import {Carrinho} from "./Components/Carrinho"
import Filtros from './Components/Filtros';
import Cards from './Components/Cards';
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



const produto = [
  {
        id:1,
        fotoProduto: card1,
        fotoEstampa: estampaCard1,
        descricao:'Camiseta Branca Astronauta - Masculina',
        preco:'80'

  },
  {
        id:4,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'83',
        quantidade: 6
  }
]




class App extends React.Component {
  state= {
    
    cards:[
      { id:1,
        fotoProduto: card1,
        fotoEstampa: estampaCard1,
        descricao:'Camiseta Branca Astronauta - Masculina',
        preco:'80',
      },
      { id:2,
        fotoProduto: card2,
        fotoEstampa: estampaCard2,
        descricao:'Camiseta Branca Astronauta - Feminina',
        preco:'81',
        quantidade: 1
      },
      { id:3,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'82',
        quantidade: 3
      },
      { id:4,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'83',
        quantidade: 6
      },
      { id:5,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'84',
        quantidade: 2
      },
      { id:6,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'85',
        quantidade: 3
      },
      { id:7,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'86',
        quantidade: 5
      },
      { id:8,
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao:'Camiseta Preta Astronauta - Feminina',
        preco:'87',
        quantidade: 10
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
  };

  onAddProductToCart = (produtoId) => {
    const productInCart = this.state.cards.find(produto => produtoId === produto.id)

    if(productInCart) {
      const newProductsInCart = this.state.cards.map(produto => {
        if(produtoId === produto.id) {
          return {
            ...produto,
            quantidade: produto.quantidade + 1
          }
        }

        return produto
      })

      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = produtoId.find(produto => produtoId === produto.id)

      const newProductsInCart = [...this.state.cards, {...productToAdd, quantity: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (produtoId) => {
    const newProductsInCart = this.state.cards.map((produto) => {
      if(produto.id === produtoId) {
        return {
          ...produto,
          quantity: produto.quantity - 1
        }
      }
      return produto
    }).filter((produto) => produto.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
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
          onAddProductToCart={this.onAddProductToCart}
          />  
      )
    });

    return (
      <MainContainer >
        <Header/>
        <Main >
          <Filtros
            precoMin= {this.state.precoMin}
            precoMaxn= {this.state.precoMax}
            updatePrecoMin={this.updatePrecoMin}
            updatePrecoMax={this.updatePrecoMax}
          />
          <CardContainer>
            
            {listaFiltrada} 
          </CardContainer>
          <Carrinho 
          productInCart={this.state.cards}
          onRemoveProductFromCart={this.onRemoveProductFromCart} />
        </Main>  
      </MainContainer>  
    );
  } 
}

export default App;
