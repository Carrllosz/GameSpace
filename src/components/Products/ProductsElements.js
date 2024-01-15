import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  padding: 5rem 5%;
  background: #46258B;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Alterado para space-around para melhor distribuição */
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 2%; /* Ajustado para uma margem uniforme */
  line-height: 2;
  width: 46%;
  max-width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover; /* Corrigindo imagens amassadas */
  border-radius: 8px; /* Adicionado borda para melhor aparência */
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1rem; /* Adicionado espaçamento inferior */
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem; /* Adicionado espaçamento inferior */
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
