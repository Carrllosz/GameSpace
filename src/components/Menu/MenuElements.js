import styled from "styled-components";
import { WiDirectionRight } from "react-icons/wi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { RiGameLine } from "react-icons/ri";

export const CategoriesContainer = styled.div`
  max-width: 1300px;
  min-height: 75px;
  padding: 4rem 5%;
  background: #F5E7D8;
  justify-content: center;
  align-items: center;
`;

export const TextCategories = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #FF2273;
  padding-bottom: 20px;
`;

export const CategoriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const CategoriesCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FF2273;
  line-height: 4;
  margin: 10px;
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  justify-content: center;
`;

export const Icon = styled(WiDirectionRight)`
  color: #fff;
  width: 50px;
  height: 50px;
`;

export const PhoneIcon = styled(FaHeadphonesAlt)`
  color: #fff;
  width: 70%;
  height: 70%;
`;
export const ShirtIcon = styled(IoShirtOutline)`
  color: #fff;
  width: 70%;
  height: 70%;
`;
export const GameIcon = styled(RiGameLine)`
  color: #fff;
  width: 70%;
  height: 70%;
`;

export const CategoryName = styled.div`
  color: #fff;
  font-size: 1.2rem;
  display: flex; 
  align-items: center; 
`;