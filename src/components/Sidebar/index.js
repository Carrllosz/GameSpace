import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, StyledSubMenu, StyledMenuItem, StyledMenu, GetOut, GetOutIcon } from './SidebarElements';
import { useNavigate } from 'react-router-dom';
import CarrinhoScreen from './carrinhoscreen'; 


const Sidebar = ({ isOpen, toggle, cartItems, userType }) => {
  const navigate = useNavigate();
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const abrirCarrinho = () => {
    setCarrinhoAberto(true);
  };

  const fecharCarrinho = () => {
    setCarrinhoAberto(false);
  };

  const handleLoginClick = () => {
    navigate('/Login');
    toggle();
  }

  const handleSignupClick = () => {
    navigate('/SignUp');
    toggle();
  }

  const handleAddProductClick = () => {
    navigate('/ProductManagement'); 
    toggle();
  }

  console.log("cartItems no Sidebar:", cartItems); 

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
        <StyledMenuItem onClick={handleAddProductClick}>Gerenciar Produtos</StyledMenuItem>
      </StyledMenu>
      {carrinhoAberto && <CarrinhoScreen onClose={fecharCarrinho} cartItems={cartItems} />}
    </SidebarContainer>
  )
}

export default Sidebar;