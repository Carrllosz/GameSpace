// No componente Products
import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './ProductsElements';

const Products = ({ data, addToCart }) => {

  return (
    <div>
      <ProductsContainer>
        <ProductWrapper>
          {data.map((product, index) => {
            return (
              <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductPrice>{product.price}</ProductPrice>
                  {/* Adiciona o evento onClick para chamar a função addToCart */}
                  <ProductButton onClick={() => addToCart(product)}>
                    Adicionar ao Carrinho
                  </ProductButton>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </div>
  );
};

export default Products;
