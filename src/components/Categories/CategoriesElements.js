import styled from 'styled-components';
import { FaHeadphonesAlt } from 'react-icons/fa';
import { IoShirtOutline } from 'react-icons/io5';
import { RiGameLine } from 'react-icons/ri';

export const CategorieContainer = styled.div`
  max-width: 1300px;
  min-height: 100vh;
  padding: 5rem 5%;
  background: #f5e7d8;
  color: #fff;
`;

export const CategoriesSelect = styled.div`
  display: flex;
  justify-content: center;
`;

export const Categories = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  background-color: #aecaff;
  border-radius: 50%;
  margin: 0.3rem;
  align-items: center;
  justify-content: center;

`;


export const PhoneIcon = styled(FaHeadphonesAlt)`
  color: #fff;
  width: 35px;
  height: 35px;
`;

export const ShirtIcon = styled(IoShirtOutline)`
  color: #fff;
  width: 35px;
  height: 35px;
`;

export const GameIcon = styled(RiGameLine)`
  color: #fff;
  width: 35px;
  height: 35px;
`;

export const PhoneText = styled.div`
  color: #fff;
  font-size: 0.7rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`;

export const CategorieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
`;

export const CategorieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2%;
  line-height: 2;
  width: 46%;
  max-width: 200px;
`;

export const CategorieImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const CategorieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;

export const CategorieTitle = styled.h2`
  font-weight: bold;
  font-size: 1.1rem;
  color: #ff2273;
`;

export const CategoriePrice = styled.p`
  font-size: 1.1rem;
  color: #ff2273;
`;

export const CategorieButton = styled.button`
  font-size: 0.7rem;
  height: 50px;
  margin: 1rem 1rem;
  width: 100%;
  border-radius: 30px;
  background: #ff2273;
  color: #fff;
  transition: all 0.3s ease-out;
  border-color: transparent;

  &:hover {
    background: #fff;
    color: #ff2273;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
