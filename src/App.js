import React from 'react';
import styled from 'styled-components'
import Header from './Components/Header'
import {Carrinho} from './Components/Carrinho'
import Filtros from './Components/filtro'
import Cards from './Components/cards'
import card1 from './img_cards/Card1.png'
import estampaCard1 from './img_cards/Estampa_Card1.png'
import card2 from './img_cards/Card2.png'
import estampaCard2 from './img_cards/Estampa_Card2.png'
import card3 from './img_cards/Card3.png'
import estampaCard3 from './img_cards/Estampa_Card3.png'
import OrdenacaoPreco from './Components/OrdenacaoPreco';

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
  state = {
    cards: [
      {
        fotoProduto: card1,
        fotoEstampa: estampaCard1,
        descricao: "Camiseta Branca Astronauta - Masculina",
        preco: "100",
      },
      {
        fotoProduto: card2,
        fotoEstampa: estampaCard2,
        descricao: "Camiseta Branca Astronauta - Feminina",
        preco: "81",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "90",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "83",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "84",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "85",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "86",
      },
      {
        fotoProduto: card3,
        fotoEstampa: estampaCard3,
        descricao: "Camiseta Preta Astronauta - Feminina",
        preco: "87",
      },
    ],
    precoMin: "",
    precoMax: "",
    inputPesquisar: "",
    ordenacaoPreco: "",
  };

  updatePrecoMin = (dig) => {
    this.setState({ precoMin: dig.target.value });
  };
  updatePrecoMax = (dig) => {
    this.setState({ precoMax: dig.target.value });
  };

  updatePesquisar = (dig) => {
    this.setState({ inputPesquisar: dig.target.value });
  };

  updateOrdenacaoPreco = (event) => {
    this.setState({ ordenacaoPreco: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.cards
      .filter((card) => {
        return this.state.precoMin === "" || card.preco >= this.state.precoMin;
      })
      .filter((card) => {
        return this.state.precoMax === "" || card.preco <= this.state.precoMax;
      })
      .filter((card) => {
        return card.descricao
          .toLowerCase()
          .includes(this.state.inputPesquisar.toLowerCase());
      }).sort((precoAtual, proximoPreco) => {
        switch (this.state.ordenacaoPreco) {
          case "precoMenor":
            return precoAtual.preco - proximoPreco.preco
          case "precoMaior":
            return proximoPreco.preco - precoAtual.preco
          default:
            return  this.state.preco
        }
      })
      .map((card) => {
        return (
          <Cards
            fotoProduto={card.fotoProduto}
            fotoEstampa={card.fotoEstampa}
            descricao={card.descricao}
            preco={card.preco}
          />
        );
      });

      console.log(this.state.ordenacaoPreco)

    return (
      <MainContainer>
        <Header
          inputPesquisar={this.state.inputPesquisar}
          updatePesquisar={this.updatePesquisar}
        />
        <OrdenacaoPreco 
          ordenacaoPreco={this.state.ordenacaoPreco}
          updateOrdenacaoPreco={this.updateOrdenacaoPreco}
        />       
        <Main>
          <Filtros
            precoMin={this.state.precoMin}
            precoMaxn={this.state.precoMax}
            updatePrecoMin={this.updatePrecoMin}
            updatePrecoMax={this.updatePrecoMax}
          />
          <CardContainer>{listaFiltrada}</CardContainer>
        </Main>
      </MainContainer>
    );
  }
}

export default App;
