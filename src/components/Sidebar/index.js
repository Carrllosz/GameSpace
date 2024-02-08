import React from 'react';
import { SidebarContainer, Icon, CloseIcon, StyledSubMenu, StyledMenuItem, StyledMenu } from './SidebarElements';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggle}) => {
  const navigate = useNavigate();
  
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


  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <StyledMenu>        
        <StyledMenuItem onClick={handleLoginClick}>Login</StyledMenuItem>
        <StyledMenuItem onClick={handleSignupClick}>SignUp</StyledMenuItem>
        <StyledMenuItem>Carrinho</StyledMenuItem>
          <StyledSubMenu label="Categorias">
          <StyledMenuItem >Acessórios</StyledMenuItem>
          <StyledMenuItem >Jogos</StyledMenuItem>
          <StyledMenuItem >Eletrônicos</StyledMenuItem>
        </StyledSubMenu>
          <StyledSubMenu label="Gerenciar Produtos">
            <StyledMenuItem >Adicionar Produto</StyledMenuItem>
            <StyledMenuItem>Remover Produto</StyledMenuItem>
          </StyledSubMenu>
        
      </StyledMenu>
    </SidebarContainer>
  )
}
 
export default Sidebar;
