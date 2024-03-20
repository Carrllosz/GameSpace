import styled from "styled-components";
import game from '../../images/login3.png';

export const LoginContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr; /* Divide a tela em duas colunas */
    height: 100vh;
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Uma coluna em telas menores */
    }
`;

export const LoginFormContainer = styled.div`
    background: #F5E7D8;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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

export const LoginForm = styled.form`
    max-width: 350px;
    width: 100%;
    margin-top: 50px;
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
    margin-bottom: 16px;
    height: 40px;
    border: 1px solid #FEBAC5;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FEBAC5;
`;

export const LoginButton = styled.button`
    width: 40%;
    padding: 10px;
    background: #FEBAC5;
    color: #DF2469;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    margin-left: 15vh;
    margin-top: 35vh;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: #fff;
        color: #46258B;
    }
`;

export const RouteSingup = styled.div`
    font-size: 0.9rem;
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
