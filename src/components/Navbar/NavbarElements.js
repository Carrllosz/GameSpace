import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiConsoleController } from "react-icons/gi";


export const Nav = styled.nav`
background: #AECAFF;
display: flex;
justify-content: center; 
align-items: center; 
font-weight: bold;
position: fixed; 
width: 100%; 
height: 80px;
top: 0; /* Adiciona o topo como 0 para iniciar a partir do topo */
left: 0; /* Garante que o componente comece da borda esquerda */
z-index: 999; /* Certifique-se de que o navbar esteja acima de outros elementos */
`;

export const NavLink = styled(Link)`
    color: #FF2273;
    font-size: 1.2rem;
    display: block;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    position: absolute;
    left: 40px;
`;

export const Inputwrapper = styled.div` 
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 25%;
    height: 2.5rem;
    border-radius: 10px;
    padding: 0 15px;
    box-shadow: 0px 0px 0px #ddd;
`

export const Input = styled.div` 
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 0.9rem;
    width: 100%;
    margin-left: 5px;
    outline: none;
    justify-content: flex-start;
    align-items: center;
    display: flex;
`


export const NavIcon = styled.div`
    display: block;
    position: absolute;
    right: 15px;
    cursor: pointer;
    color: #FF2273;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
        font-size: 1rem;
        top: 5px;
    }
`;

export const Bars = styled(GiConsoleController)`
    font-size: 2.2rem;
    transform: translate(-50%, -15%);
`;

export const SearchResults = styled.div`
    position: absolute;
    top: calc(80% + 5px);
    width: 26%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 10px;
        font-size: 0.8rem;
        color: #AECAFF;
    }

    display: ${props => props.isEmpty ? 'none' : 'block'};
`;