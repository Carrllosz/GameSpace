import React, { useState } from 'react';
import { FeatureContainer, FeatureButton, ImageContainer, TextFeatures, ImageWrapper } from './FeatureElements';
import stray from '../../images/stray.jpg';
import it from '../../images/it.jpg';
import red from '../../images/red.jpg';


const Feature = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      imageUrl: stray,
    },
    {
      imageUrl: it,
   },
    {
      imageUrl: red,
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <FeatureContainer>
      <TextFeatures>Jogos Mais Vendidos</TextFeatures>
      <FeatureButton direction="prev" onClick={handlePrevSlide}>{'❮'}</FeatureButton>
      <ImageContainer style={{ transform: `translateX(-${currentSlide * 720}px)` }}>
        {slides.map((slide, index) => (
          <ImageWrapper key={index}>
            <img src={slide.imageUrl} alt={slide.title} />
          </ImageWrapper>
        ))}
      </ImageContainer>
      <FeatureButton direction="next" onClick={handleNextSlide}>{'❯'}</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
