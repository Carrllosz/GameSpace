import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
  const  [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <HeroContent>
            <HeroItems>
                <HeroH1>Melhores jogos</HeroH1>
                <HeroP>Entrega de qualidade</HeroP>
                <HeroBtn>Faça sua encomenda</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  );
};

export default Hero