import * as React from 'react';
import { ProductsContainer, ImageProduct, Title, Owner, Description, InfoProductContainer, InfoContainer, Price, Review, BuyButton, AddButton, ButtonContainer, NavIcon, Bars } from './PageElements';
import { Rating } from '@mui/material';
import { useProductContext } from '../ProductContext';

const ProductPage = ({ toggleSidebar }) => { // Altere o nome da prop para toggleSidebar
  const { selectedProduct } = useProductContext();

  if (!selectedProduct) {
    // Lidere com o caso em que não há nenhum produto selecionado
    return <div>Nenhum produto selecionado</div>;
  }

  const handleAddToCart = (produto) => {
    selectedProduct(produto); // Atualize o produto selecionado no contexto de produto
  };

  return (
    <ProductsContainer>
      <NavIcon onClick={toggleSidebar}> {/* Adicione o evento onClick aqui */}
        <Bars></Bars>
      </NavIcon>
      <InfoProductContainer>
      <ImageProduct>
        <img
          alt=""
          src={selectedProduct.foto} // Adicione esta linha para exibir a imagem do produto
          style={{ maxWidth: '80%', maxHeight: '90%' }}
        />
        <h3 style={{ fontSize: "0.8rem", color: "#097738", marginTop: "10px" }} >Quantidade no estoque: {selectedProduct.quantidade}</h3>
      </ImageProduct>
        <InfoContainer>
          <Title >{selectedProduct.nome}</Title>
          <Review><Rating />Avaliação</Review>
          <Description >{selectedProduct.descricao}</Description>
          <Price> R$ {selectedProduct.preco}</Price>
          <ButtonContainer>
            <BuyButton>Comprar agora</BuyButton>
            <AddButton onClick={() => handleAddToCart(selectedProduct)}>Adicionar ao carrinho</AddButton>
          </ButtonContainer>
        </InfoContainer>
      </InfoProductContainer>
    </ProductsContainer>
  );
};

export default ProductPage;
