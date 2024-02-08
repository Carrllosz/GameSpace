import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { GiConsoleController } from "react-icons/gi";


export const Nav = styled.nav `
    background: transparent;
    display: flex;
    justify-content: center;
    font-weight: bold;
    top: 5px;
`;

export const NavLink = styled(Link)`
    color: #FF2273;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    top: 10px;
    position: relative;

    @media screen and(max-width: 400px) {
        position: absolute;
        top: 5px;
        left: 20px;
    }
`;

export const NavIcon = styled.div `
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
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