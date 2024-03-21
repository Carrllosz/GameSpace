// View.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProductsContainer,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  ProductButton,
} from './ViewElements';

const View = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/produtos");
        setProducts(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const handleRemoveProduct = async (productId) => {
    try {
      await axios.delete(`http://localhost:8800/produtos/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductsContainer>
      <ProductWrapper>
        {products.map((product) => (
          <ProductCard key={product.id} className="product">
            <ProductImg src={product.foto} alt="" />
            <ProductInfo>
              <ProductTitle>{product.nome}</ProductTitle>
              <ProductPrice>${product.preco}</ProductPrice>
              <ProductButton onClick={() => handleRemoveProduct(product.id)}>Remover</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default View;
