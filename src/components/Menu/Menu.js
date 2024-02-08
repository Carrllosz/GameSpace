import React from 'react';
import {CategoriesContainer, CategoriesCard, CategoriesWrapper, TextCategories, Icon, PhoneIcon, ShirtIcon, GameIcon, CategoryName} from './MenuElements'

const Menu = () => {
    return (
        <div>
            <CategoriesContainer>
            <TextCategories>Categorias</TextCategories>
                <CategoriesWrapper>
                <CategoriesCard>
                    <GameIcon/>
                    <CategoryName>Jogos<Icon/></CategoryName>
                </CategoriesCard>
                <CategoriesCard>
                    <PhoneIcon/>
                    <CategoryName>Eletrônicos<Icon/></CategoryName>
                </CategoriesCard>
                <CategoriesCard>
                    <ShirtIcon/>
                    <CategoryName>Acessórios<Icon/></CategoryName>
                </CategoriesCard>
                </CategoriesWrapper>
            </CategoriesContainer>
        </div>
    );
}

export default Menu;