import styled from "styled-components";
import game from '../../images/home.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0),
    rgba(0,0,0,0)), 
    url(${game});
    max-width: 1300px;
    min-height: 100vh;
    padding: 1rem 2%;
    background-position: center;
    background-size: cover;
    background-attachment: fixed; 
    grid-template-columns: 1fr 2fr; /* Divide a tela em duas colunas */

`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 2.5rem;
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Mantém os itens alinhados à esquerda */
    height: 100%;
    max-height: 100%;
    padding: 3rem -4%;
    width: 100%;
    color: #e31837;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const Logo = styled.div`

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

