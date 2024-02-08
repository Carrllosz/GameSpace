import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {HeroContainer, Logo} from './HeroElements'
import PlanetaSaturno from './PlanetaSaturno';

const Hero = () => {
  const  [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <HeroContainer>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Logo>
          <PlanetaSaturno/>
        </Logo>
    </HeroContainer>
  );
};

export default Hero