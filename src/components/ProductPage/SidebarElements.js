import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { WiDirectionLeft } from "react-icons/wi";
import { GiConsoleController } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const AddComent = styled(IoAddCircleOutline)`
    color: #fff;

    &:hover{
        color: #E3386A
    }
`;

export const ViewComment = styled(GrView)`
    color: #fff;

    &:hover{
        color: #E3386A
    }
`;

export const BackIcon = styled(WiDirectionLeft)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #007D2A;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;

export const Icon = styled.div`
    position: absolute;
    width: 85%;
    top: 1.2rem;
    left: 1.5rem;
    display: flex;
    justify-content: space-between; /* Adiciona este estilo */
    align-items: center;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const Icons = styled.div`
    position: absolute;
    width: 85%;
    left: 3.5rem;
    display: flex;
    gap: 5px;
    justify-content: flex-end; /* Adiciona este estilo */
    align-items: center;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const Text = styled.div`
    position: absolute;
    top: 1.2rem; /* Mesma posição do Icon */
    font-size: 1.2rem;
    color: #fff;
`;

export const CommentsContainer = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 7rem; /* Adicionando margem ao topo para empurrar o CommentsBox para baixo */
`;

export const ContainerUser = styled.div`
    justify-content: space-around;
    align-items: center;
    display: flex;
    width: 300px;
`;

export const Classificacao = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    color: #932600;
`;

export const User = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    color: #932600;
`;

export const Comment = styled.div`
    font-size: 0.9rem;
    color: #932600;
    width: 300px;
    height: 200px;
    text-align: center;
`;

export const CommentsBox = styled.div`
    width: 300px;
    height: 200px;
    background: #F5E7D8;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 12px;
    display: grid;
`;

export const Button = styled.div`
    width: 70px;
    height: 35px;
    background: #E3386A;
    font-size: 0.8rem;
    color: #fff;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer
`;


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
