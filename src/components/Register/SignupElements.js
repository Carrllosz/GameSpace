import styled from "styled-components";
import game from '../../images/login3.png';

export const SignContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr; /* Divide a tela em duas colunas */
    height: 100vh;
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Uma coluna em telas menores */
    }
`;

export const SignFormContainer = styled.div`
    background: #F5E7D8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    color: #FEBAC5; /* Cor alterada para contrastar com o fundo branco */
    font-size: 2rem;
    margin-bottom: 16px;
`;

export const SingupForm = styled.form`
    max-width: 350px;
    width: 100%;
`;

export const FormLabel = styled.label`
    font-size: 1rem;
    margin-bottom: 8px;
    display: block;
    color: #DF2469;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    height: 40px;
    margin-bottom: 12px;
    border: 1px solid #FEBAC5;
    border-radius: 4px;
    box-sizing: border-box;
    background: #fff;
`;

export const SingupButton = styled.button`
    width: 40%;
    padding: 10px;
    background: #FEBAC5;
    color: #DF2469;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    margin-left: 15vh;
    margin-top: 30vh;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #fff;
        color: #46258B;
    }
`;

export const RouteLogin = styled.div`
    font-size: 0.9rem;
    margin-top: 5px;
    text-align: center;
    color: #DF2469;

`;


export const ImageContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0),
    rgba(0,0,0,0)), 
    url(${game});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: none; /* Oculta a imagem em telas menores */
    }
`;
export const FormlabelUser = styled.div`
    font-size: 0.9rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 9px;
    color: #DF2469;

`;

export const FormInputUser = styled.input`
    border: 5px;
    border-radius: 10px;
`;