import styled from "styled-components";
import game from '../../images/login2.jpg';

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
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
    color: #46258B; /* Cor alterada para contrastar com o fundo branco */
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
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const SingupButton = styled.button`
    width: 100%;
    padding: 10px;
    background: #46258B;
    color: #fff;
    border: none;
    border-radius: 4px;
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
    justify-content: center;
`;


export const ImageContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), 
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
    padding-bottom: 9px
`;

export const FormInputUser = styled.input`
    border: 5px;
    border-radius: 10px;
`;