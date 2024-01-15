import styled from "styled-components";
import stray from '../../images/stray.jpg';

export const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)),
    url(${stray});
    max-width: 1300px;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
`;

export const FeatureButton = styled.button`
    font-size: 1.2rem;
    padding: 0.6rem 2rem; /* ajustado para 2rem para melhorar a aparência em telas menores */
    border: none;
    background: #46258B;
    color: #fff;
    transition: 0.2s ease-out;

    &:hover {
        color: #46258B;
        background: #fff;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;
