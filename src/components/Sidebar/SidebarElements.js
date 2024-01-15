import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #fff;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100px;
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #46258B;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarMenu = styled.div`
    display: grid;
    grid-templates-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-aling: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(3, 60px);
    }
`;

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #46258B;
    cursor: pointer;
    &:hover {
        color: #FCC500;
        transition: 0.2s ease-in-out;
    }
`;

export const SlideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SlidebarRoute = styled(Link)`
    background: #46258B;
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #FCC500;
        color: #fff;
    }
`