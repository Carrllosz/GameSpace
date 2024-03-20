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
  }, [products]); // Adicionei products como uma dependência para recarregar os produtos sempre que a lista for atualizada

  const handleAddToCart = (produto) => {
    setSelectedProduct(produto); // Atualize o produto selecionado no contexto de produto
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
              <ProductButton onClick={() => handleAddToCart(produto)}>Adicionar ao carrinho</ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
