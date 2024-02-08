import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const girarSistemaSolar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const movimentoTridimensional = keyframes`
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: rotateX(180deg) rotateY(180deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
`;

const gerarCorAleatoria = () => {
  const cores = [ '#AECAFF', '#FD3C03', '#FAC098']; // Azul escuro, azul claro, rosa claro, verde
  return cores[Math.floor(Math.random() * cores.length)];
};

const gerarTamanhoAleatorio = () => {
  return `${Math.floor(Math.random() * 30) + 10}px`;
};

const PlanetaSaturnoContainer = styled.div`
  position: relative;
  width: 15vw;
  height: 15vw;
  animation: ${girarSistemaSolar} 25s linear infinite;
`;

const Planeta = styled.div`
  width: 15vw;
  height: 15vw;
  background-color:#DF2469 ; /* rosa */
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg); /* Ajuste o ângulo desejado */
`;

const Aneis = styled.div`
  position: absolute;
  width: 30vw;
  height: 1.5vw;
  border: 10px solid #DF2469;
  border-radius: 70%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const PequenoPlaneta = styled.div`
  position: absolute;
  width: ${(props) => gerarTamanhoAleatorio()};
  height: ${(props) => gerarTamanhoAleatorio()};
  background-color: ${(props) => gerarCorAleatoria()};
  border-radius: 50%;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  animation: formatoAleatorio 10s linear infinite;

  @keyframes formatoAleatorio {
    0%, 100% {
      transform: scaleX(1) scaleY(1);
    }
    25% {
      transform: scaleX(0.5) scaleY(1.8);
    }
    50% {
      transform: rotate(90deg);
    }
    75% {
      transform: scaleY(0.7) scaleX(1.6);
    }
  }
`;

const ContainerCentralizado = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  left: 23%;
`

const PlanetaSaturno = () => {


  return (
    <ContainerCentralizado>
    <PlanetaSaturnoContainer>
      <Aneis className="aneis" />
      <Planeta />
      {[...Array(5)].map((_, index) => (
        <PequenoPlaneta
          key={index}
          left={`${50 + Math.cos((index / 5) * 2 * Math.PI) * 70}%`}
          top={`${50 + Math.sin((index / 5) * 2 * Math.PI) * 70}%`}
        />
      ))}
    </PlanetaSaturnoContainer>
    </ContainerCentralizado>
  );
};

export default PlanetaSaturno;
