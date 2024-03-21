import styled from "styled-components";

export const ProductsContainer = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  padding: 5rem 5%;
  background: #F5E7D8;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  line-height: 2;
  width: 46%;
  max-width: 200px;
`;

export const ProductImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.1rem;
  color: #FF2273;
`;


export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #FF2273;
`;

export const ProductButton = styled.button`
  font-size: 0.7rem;
  height: 50px;
  margin: 1rem 1rem ;
  width: 100%;
  border-radius: 30px;
  background: #FF2273;
  color: #fff;
  transition: 0.2 ease-out;
  border-color: transparent ;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF2273;
  }

  @media screen and (max-width: 700px) {
    width: 100%; /* Define a largura para 100% em telas menores que 768px */
  }
`;
