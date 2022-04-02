import React from "react"


export class ItemNoCarrinho extends React.Component {
    render() {
      return <div>
        <p>{this.props.ItemNoCarrinho.quantidade}x</p>
        <p>{this.props.ItemNoCarrinho.descricao}</p>
        <button 
          onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
        >
          Remover
        </button>
      </div>
    }
  }