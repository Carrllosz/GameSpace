import React from 'react';
import { Container, BackIcon, Name, ProductCard, ProductImg, ProductPrice } from './carrinhoElements';

const CarrinhoScreen = ({ onClose, cartItems }) => {
  console.log('Itens do carrinho:', cartItems);
  
  // Verifica se cartItems está definido e não é nulo
  if (!cartItems || cartItems.length === 0) {
    return (
      <Container>
        <BackIcon onClick={onClose}></BackIcon>
        <Name>Carrinho</Name>
        <p>Nenhum item no carrinho</p>
      </Container>
    );
  }

  return (
    <Container>
      <BackIcon onClick={onClose}></BackIcon>
      <Name>Carrinho</Name>
      {/* Itera sobre os itens do carrinho somente se cartItems estiver definido */}
      {cartItems.map((item, index) => (
        <ProductCard key={index}>
          <ProductImg src={item.img} alt={item.name} />
          <ProductPrice>{item.price}</ProductPrice>
        </ProductCard>
      ))}
    </Container>
  );
};

export default CarrinhoScreen;
