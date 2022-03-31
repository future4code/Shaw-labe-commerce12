import React from "react";
import styled from "styled-components";
import lupa from "../img/lupa.png";
import logo from "../img/logo.png";
import login from "../img/user.png";
import carrinho from "../img/carrinho.png";



const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  background-color: #b8b8b7;
  height: 100px;
  
`

const LoginCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;

  div{
    display: flex;
    align-items: center;
    img{
      margin-right: 5px;
      height: 30px;
    }
  }

  button{
    background-color: #b8b8b7;
    border: none;
  }
`

const Pesquisar = styled.div`
  display: flex;

  img{
    width: 20px;
    margin-right: 5px;
  }

  input{
    border-radius: 5px;
  }
`

const Logo = styled.img`
  width: 100px;
`
  

class Header extends React.Component{
  render() {
    return (
      <MainContainer>
        <Pesquisar>
          <img src={lupa} alt="pesquisar" />
          <input type="text" placeholder="Pesquisar" />
        </Pesquisar>
        <Logo src={logo} alt="logo" />
        <LoginCarrinho>
          <div>
            <img src={login} alt="login" />
            <p><span>Minha Conta</span></p>
          </div>
          <button>
            <img src={carrinho} alt="carrinho de compras" />
          </button>
        </LoginCarrinho>
      </MainContainer>
    );
  }
}

export default Header;