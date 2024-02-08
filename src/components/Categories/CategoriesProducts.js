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
  PhoneText
} from './CategoriesElements';

const Categorie = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleCategory = (categoryId) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const filteredData = selectedCategory
    ? data.filter(item => item.category === selectedCategory)
    : data;

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
          {filteredData.map((item, index) => (
            <CategorieCard key={index}>
              <CategorieImg src={item.img} alt={item.alt} id={item.category}/>
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
};

export default Categorie;
