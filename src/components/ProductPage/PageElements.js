import styled from "styled-components";
import { FaComments } from "react-icons/fa6";

export const ProductsContainer = styled.div`
  max-width: 1300px;
  min-height: 95vh;
  padding: 1rem 2%; 
  background: #F5E7D8;
  color: #fff;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 30px;
    right: 15px;
    cursor: pointer;
    color: #007D2A;
`;

export const Bars = styled(FaComments)`
    font-size: 2.2rem;
    transform: translate(-50%, -15%);
`;

export const ImageProduct = styled.div`
    width: 500px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Title = styled.div`
    color: #792D91;
    font-size: 2rem;
    display: flex;
    align-items: flex-start;
`;

export const Owner = styled.div`
    color: #932600;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
`;

export const Review = styled.div`
    color: #097738;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Description = styled.div`
    color: #792D91;
    font-size: 1rem;
    margin-bottom: 5rem;
`;

export const Price = styled.div`
    color: #F0CA05;
    font-size: 3.5rem;
`;

export const InfoProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 90vh;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
    height: 60vh;
    padding: 1rem 2%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between; /* Para os botões ficarem lado a lado */
    margin-top: 1rem; /* Adiciona espaço acima dos botões */
    gap: 20px
`;

export const BuyButton = styled.div`
    width: 160px;
    height: 70px;
    border-radius: 20px;
    background: #AECAFF;
    color: #fff;
    font-size: 0.8rem;
    justify-content: center;
    display: flex;
    align-items: center
`;

export const AddButton = styled.div`
    width: 160px;
    height: 70px;
    border-radius: 20px;
    background: #E24795;
    color: #fff;
    justify-content: center;
    display: flex;
    font-size: 0.8rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: #E24795;
        background: #fff;
    }
`;
