import React, { useState, useEffect } from 'react';
import {
  CategorieContainer,
  CategorieWrapper,
  CategorieCard,
  CategorieImg,
  CategorieInfo,
  CategorieTitle,
  CategoriePrice,
  CategorieButton,
  Categories,
  CategoriesSelect,
  PhoneIcon,
  ShirtIcon,
  GameIcon,
  PhoneText,
} from './CategoriesElements';
import axios from 'axios';
import { useProductContext } from '../ProductContext';

const CategoriesProducts = () => {
  const { setSelectedProduct } = useProductContext();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/produtos?categoria=${selectedCategory}`);
        setProducts(res.data);
      } catch(err) {
        console.log(err);
      }
    };

    fetchProductsByCategory();
  }, [selectedCategory]);

  const toggleCategory = (categoryId) => {
    setSelectedCategory((prevCategory) => {
      return prevCategory === categoryId ? "" : categoryId;
    });
  };

  const handleAddToCart = (produto) => {
    setSelectedProduct(produto); // Atualize o produto selecionado no contexto de produto
  };

  return (
    <div>
      <CategorieContainer>
        <CategoriesSelect>
          <Categories onClick={() => toggleCategory('jogos')}>
            {selectedCategory === 'jogos' ? (
              <PhoneText>Jogos</PhoneText>
            ) : (
              <GameIcon />
            )}
          </Categories>

          <Categories onClick={() => toggleCategory('eletrônicos')}>
            {selectedCategory === 'eletrônicos' ? (
              <PhoneText>Eletrônicos</PhoneText>
            ) : (
              <PhoneIcon />
            )}
          </Categories>

          <Categories onClick={() => toggleCategory('roupas')}>
            {selectedCategory === 'roupas' ? (
              <PhoneText>Roupas</PhoneText>
            ) : (
              <ShirtIcon />
            )}
          </Categories>
        </CategoriesSelect>

        <CategorieWrapper>
          {products.map((produto, index) => (
            <CategorieCard key={index}>
              <CategorieImg src={produto.foto} alt={produto.alt} />
              <CategorieInfo>
                <CategorieTitle>{produto.nome}</CategorieTitle>
                <CategoriePrice>{produto.preco}</CategoriePrice>
                <CategorieButton onClick={() => handleAddToCart(produto)}>Adicionar ao carrinho</CategorieButton>
              </CategorieInfo>
            </CategorieCard>
          ))}
        </CategorieWrapper>
      </CategorieContainer>
    </div>
  );
}

export default CategoriesProducts;
