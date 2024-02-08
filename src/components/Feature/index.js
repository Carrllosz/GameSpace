import React, { useState } from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import stray from '../../images/stray.jpg';
import it from '../../images/it.jpg';

const Feature = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Jogo do Momento',
      description: 'Stray (2022)',
      imageUrl: stray,
      buttonText: 'Compre agora',
    },
    {
      title: 'Jogo do Momento',
      description: 'It takes two (2023)',
      imageUrl: it,
      buttonText: 'Compre agora',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <FeatureContainer imageUrl={slides[currentSlide].imageUrl}>
      <h1>{slides[currentSlide].title}</h1>
      <p>{slides[currentSlide].description}</p>
      <FeatureButton>{slides[currentSlide].buttonText}</FeatureButton>

      <div className="arrows">
        <span className="arrow" onClick={handlePrevSlide}>❮</span>
        <span className="arrow" onClick={handleNextSlide}>❯</span>
      </div>
    </FeatureContainer>
  );
};

export default Feature;
