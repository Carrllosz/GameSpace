import styled from "styled-components";
import game from '../../images/home.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0),
    rgba(0,0,0,0.1)), 
    url(${game});
    max-width: 1300px;
    min-height: 100vh;
    padding: 2rem 2%;
    background-position: center;
    background-size: cover;
    
`;

export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 2.5rem 5%;
`;

export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Mantém os itens alinhados à esquerda */
    height: 100%;
    max-height: 100%;
    padding: 0 2%;
    width: 100%;
    color: #46258B;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;
`;

export const HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border: none;
    background: #FCC500;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #46258B;
    }
`;
