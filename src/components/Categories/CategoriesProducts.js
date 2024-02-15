import React, { useState } from 'react';
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

import { Data } from './data';

const CategoriesProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleCategory = (categoryId) => {
    setSelectedCategory((prevCategory) => {
      return prevCategory === categoryId ? "" : categoryId;
    });
  };

  const filteredData = selectedCategory ? 
    Data.filter(item => item.category === selectedCategory) : 
    Data;

  return (
    <div>
      <CategorieContainer>
        <CategoriesSelect>
          <Categories onClick={() => toggleCategory('jogos')}>
            {selectedCategory === 'jogos' ? (
              <PhoneText>jogos</PhoneText>
            ) : (
              <GameIcon />
            )}
          </Categories>

          <Categories onClick={() => toggleCategory('eletrônicos')}>
            {selectedCategory === 'eletrônicos' ? (
              <PhoneText>eletrônicos</PhoneText>
            ) : (
              <PhoneIcon />
            )}
          </Categories>

          <Categories onClick={() => toggleCategory('roupas')}>
            {selectedCategory === 'roupas' ? (
              <PhoneText>roupas</PhoneText>
            ) : (
              <ShirtIcon />
            )}
          </Categories>
        </CategoriesSelect>

        <CategorieWrapper>
          {filteredData.map((item, index) => (
            <CategorieCard key={index}>
              <CategorieImg src={item.img} alt={item.alt} />
              <CategorieInfo>
                <CategorieTitle>{item.name}</CategorieTitle>
                <CategoriePrice>{item.price}</CategoriePrice>
                <CategorieButton>{item.button}</CategorieButton>
              </CategorieInfo>
            </CategorieCard>
          ))}
        </CategorieWrapper>
      </CategorieContainer>
    </div>
  );
}

export default CategoriesProducts;
