import styled from "styled-components";

export const FeatureContainer = styled.div`
  max-width: 1300px;
  min-height: 90px;
  padding: 4rem 5%;
  background: #F5E7D8;
  position: relative; /* Adiciona posição relativa para conter o ImageContainer */
  overflow-x: hidden; /* Oculta o overflow horizontal */
`;

export const TextFeatures = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #FF2273;
  padding-bottom: 20px;
  height: 80px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
  
  img {
    width: 100%;
    height: 100%; 
    object-fit: cover; 
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 50%; /* Define a largura para 50% do contêiner pai */
  height: 300px; 
  border-radius: 100px;
  overflow: hidden;
  margin: 0 10px; /* Adiciona margem entre as imagens */
`;

export const FeatureButton = styled.button`
  position: absolute;
  top: 55%;
  font-size: 1.2rem;
  color: #fff;
  background-color: #FF2273; 
  cursor: pointer;
  transition: 0.2s ease-out;
  width: 30px; 
  height: 30px; 
  border-radius: 50%; 
  justify-content: center;
  border: none;
  z-index: 1;

  &:hover {
    background-color: #AECAFF; 
  }

  ${(props) => props.direction === 'prev' ? 'left: 0;' : 'right: 0;'}
`;
