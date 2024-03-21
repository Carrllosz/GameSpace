import React,{useState, useEffect} from 'react';
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
import axios from 'axios';
import { useProductContext } from '../ProductContext';

const Products = () => {
  const { setSelectedProduct } = useProductContext();
  const [products, setProducts] = useState([]);
  const isAuthenticated = true; // Modifique para false se desejar que apenas usuários autenticados possam adicionar produtos ao carrinho

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
  }, [products]);

  const handleAddToCart = (produto) => {
    if (isAuthenticated) {
      setSelectedProduct(produto);
    } else {
      console.log('Usuário não autenticado. Faça login para adicionar produtos ao carrinho.');
      // Exibir uma mensagem ou redirecionar para a página de login
    }
  };


  return (
    <ProductsContainer>
      <ProductWrapper>
        {products.map((produto) => (
          <ProductCard key={produto.idproduto} className="produto">
            <ProductImg src={produto.foto} alt="" />
            <ProductInfo>
              <ProductTitle>{produto.nome}</ProductTitle>
              <p style={{display: "none"}}>{produto.descricao}</p>
              <ProductPrice>${produto.preco}</ProductPrice>
              <ProductButton onClick={() => handleAddToCart(produto)} disabled={!isAuthenticated}>Adicionar ao carrinho</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
