import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1 data-aos='zoom-in-up'>PIZZA OF YOUR DREAMS</HeroH1>
          <HeroP  data-aos='fade-up' style={{fontWeight:'lighter'}}>Since 1958</HeroP>
          <HeroBtn data-aos='zoom-in-right' onClick={()=>{
        window.location.href='https://www.pizzahut.com/'
      }}>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
