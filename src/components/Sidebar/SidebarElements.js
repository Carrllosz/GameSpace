import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { WiDirectionLeft } from "react-icons/wi";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #E3386A;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const BackIcon = styled(WiDirectionLeft)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    left: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const StyledMenu = styled(Menu)`
    text-align: center;
    background-color: #E3386A;
    margin-bottom: 10px;
    border: none;
    outline: none;
`;

// Adicione o estilo do item do menu aqui
export const StyledMenuItem = styled(MenuItem)`
    color: #fff;
    position: absolute;
    font-size: 18px;
    background: #E3386A;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: #E3386A;
        transition: 0.2s ease-in-out;
        background-color: #fff;
    }
`;

export const StyledSubMenu = styled(SubMenu)`
    color: #fff;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-bottom:12px;

    &:hover {
        color: #E3386A;
        transition: 0.2s ease-in-out;
        background-color: #fff;
    }
`;


export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 50px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 50px);
    }
`;
