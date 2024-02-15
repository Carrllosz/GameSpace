import styled from "styled-components";
import { WiDirectionLeft } from "react-icons/wi";

export const Container = styled.aside`
    position: fixed;
    width: 350px;
    height: 100%;
    font-size: 0.8rem;
    background: #F2FCFC;
    padding-top: 30px;

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;

export const BackIcon = styled(WiDirectionLeft)`
  color: #E3386A;
  width: 40px;
  height: 40px;
  position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
`;

export const Name = styled.div`
  color: #E3386A;
  font-size: 1.2rem;
  display: flex; 
  align-items: center; 
  justify-content: center;
`;

export const ProductImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
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


export const ProductPrice = styled.p`
  font-size: 1.1rem;
  color: #FF2273;
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.1rem;
  color: #FF2273;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;