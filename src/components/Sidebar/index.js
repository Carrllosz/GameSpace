import React from 'react'
import {SidebarContainer, Icon,CloseIcon,SidebarMenu,SidebarLink,SlideBtnWrap,SlidebarRoute} from './SidebarElements';
import { useNavigate, } from 'react-router-dom';


const Sidebar = ({isOpen, toggle}) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
    toggle();
  }

  const handleSignupClick = () => {
    navigate('/SignUp');
    toggle();
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon>
            </CloseIcon>
        </Icon>
        <SidebarMenu>
            <SidebarLink to='/Login' onClick={handleLoginClick}>Login</SidebarLink>
            <SidebarLink to='/SignUp' onClick={handleSignupClick}>SignUp</SidebarLink>
            <SidebarLink to='/'>Menu</SidebarLink>
        </SidebarMenu>
        <SlideBtnWrap>
            <SlidebarRoute to='/'>Peça Agora</SlidebarRoute>
        </SlideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar