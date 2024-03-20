import React from 'react';
import { Container, BackIcon, Name, ProductCard, ProductImg, ProductPrice, ProductName, ProductQtd, ProductDetails, ProductInfo, Remove, ProductQtdContainer, Total, TotalContainer, ContainerPrice, Button, ButtonContainer } from './carrinhoElements';
import { useProductContext } from '../ProductContext'; // Importe o hook useProductContext

const CarrinhoScreen = ({ onClose }) => {
  const { selectedProduct } = useProductContext();

  return (
    <Container>
      <BackIcon onClick={onClose}></BackIcon>
      <Name>Carrinho</Name>
      <ProductCard>
        <ProductImg src={selectedProduct.foto} alt="" /> {/* Use as informações do produto selecionado */}
        <ProductInfo>
          <ProductName>{selectedProduct.nome}</ProductName>
          <ProductDetails>
            <ProductQtdContainer>
              <ProductPrice>R$ {selectedProduct.preco}</ProductPrice>
              <ProductQtd>1</ProductQtd> {/* A quantidade pode ser configurada de acordo com sua lógica */}
            </ProductQtdContainer>
            <Remove>Remover</Remove>
          </ProductDetails>
        </ProductInfo>
      </ProductCard>
      <ContainerPrice>
        <Total>Total: </Total>
      </ContainerPrice>
      <ButtonContainer>
        <Button>Finalizar Compra</Button>
      </ButtonContainer>
    </Container>
  );
};

export default CarrinhoScreen;
