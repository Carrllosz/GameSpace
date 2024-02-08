import styled from "styled-components";

export const FeatureContainer = styled.div`
  position: relative;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${(props) => props.imageUrl});
  max-width: 1300px;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  overflow: hidden;

  h1 {
    font-size: 3rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .arrows {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow {
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    transition: 0.2s ease-out;
  }

  .arrow:hover {
    color: #000;
  }
`;

export const FeatureButton = styled.button`
  font-size: 0.9rem;
  height: 50px;
  margin: 1rem 1rem ;
  width: 10%;
  border-radius: 12px;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  border-color: transparent ;

  &:hover {
    color: #46258B;
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    width: 30%; /* Define a largura para 100% em telas menores que 768px */
  }
`;
