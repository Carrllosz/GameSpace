import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, StyledSubMenu, StyledMenuItem, StyledMenu } from './SidebarElements';
import { useNavigate } from 'react-router-dom';
import CarrinhoScreen from './carrinhoscreen'; // Corrija o import

const Sidebar = ({ isOpen, toggle, cartItems, userType }) => {
  const navigate = useNavigate();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const abrirCarrinho = () => {
    setCarrinhoAberto(true);
  };

  // Defina uma função para fechar a tela do carrinho
  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  const handleLoginClick = () => {
    navigate('/Login');
    // Comment or remove the following line to prevent the sidebar from closing
    toggle();
  }

  const handleSignupClick = () => {
    navigate('/SignUp');
    // Comment or remove the following line to prevent the sidebar from closing
    toggle();
  }

  console.log("cartItems no Sidebar:", cartItems); // Adicione esta linha para verificar se cartItems está sendo recebido corretamente

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <StyledMenu>
        <StyledMenuItem onClick={handleLoginClick}>Login</StyledMenuItem>
        <StyledMenuItem onClick={handleSignupClick}>SignUp</StyledMenuItem>
        <StyledMenuItem onClick={abrirCarrinho}>Carrinho</StyledMenuItem>
        <StyledSubMenu label="Categorias">
          <StyledMenuItem >Acessórios</StyledMenuItem>
          <StyledMenuItem >Jogos</StyledMenuItem>
          <StyledMenuItem >Eletrônicos</StyledMenuItem>
        </StyledSubMenu>
        {userType === 'company' && (
        <StyledSubMenu label="Gerenciar Produtos">
          <StyledMenuItem >Adicionar Produto</StyledMenuItem>
          <StyledMenuItem>Remover Produto</StyledMenuItem>
        </StyledSubMenu>
        )}
      </StyledMenu>
      {carrinhoAberto && <CarrinhoScreen onClose={fecharCarrinho} cartItems={cartItems} />}
    </SidebarContainer>
  )
}

export default Sidebar;
