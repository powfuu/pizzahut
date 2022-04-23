import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
const Feature = () => {
return (
    <FeatureContainer>
      <h1 data-aos='zoom-in-up'>Pizza of the Day</h1>
      <p data-aos='fade-up'>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton data-aos='zoom-in-up' onClick={()=>{
        window.location.href='https://www.pizzahut.com/'
      }}>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
