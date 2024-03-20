import styled from "styled-components";
import { WiDirectionLeft } from "react-icons/wi";

export const Container = styled.aside`
    position: fixed;
    width: 350px;
    height: 100%;
    font-size: 0.8rem;
    background: #FFA7A6;
    padding-top: 30px;

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;

export const BackIcon = styled(WiDirectionLeft)`
  color: #fff;
  width: 40px;
  height: 40px;
  position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    cursor: pointer;

`;

export const Name = styled.div`
  color: #fff;
  font-size: 1.2rem;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

export const ProductImg = styled.img`
  height: 120px;
  width: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: none;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  width: 300px;
  margin: 10px;
  height: auto;
`;


export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 1rem; /* Ajuste a margem para separar os elementos */
`;

export const ProductQtdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
  width: 100%; 
  gap: 80px;
`;

export const ProductQtd = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

export const Remove = styled.button`
  background-color: #E3386A;
  color: #fff;
  font-size: 0.7rem;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background-color: #fff;
    color: #E3386A;
  }
`;


export const ProductName = styled.p`
  font-size: 1rem;
  color: #fff;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.1rem;
  color: #fff;
`;

export const TotalContainer = styled.h2`
  font-weight: bold;
  font-size: 1rem;
  color: #E3386A;
  background-color: #fff;
  border-radius: 10px;
  width: 70px;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 40px;
`;

export const Total = styled.h2`
  font-weight: bold;
  font-size: 1.1rem;
  color: #E3386A;
`;

export const ContainerPrice = styled.h2`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 100px; /* Distância do fundo */
  width: 100%;
`;

export const Button = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  background-color: #E3386A;
  font-size: 0.8rem;
  border-radius: 15px;
  cursor: pointer;  
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #E3386A;
  }
`;

export const ButtonContainer = styled.h2`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 40px; /* Distância do fundo */
  width: 100%;
`;

