import styled from "styled-components";

export const AddProductsContainer = styled.div`
    max-width: 1300px;
    min-height: 100vh;
    background: #F5E7D8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TextAdd = styled.div`
    font-size: 1.3rem;
    font-weight: bold;
    color: #E24795;
`;

export const InfoProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    gap: 30px;
`;

export const ImageProduct = styled.div`
    width: 400px; /* Removido o width fixo */
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 20%;
    overflow: hidden; /* Para o input não escapar do contêiner */
    position: relative; /* Para posicionar o input dentro do contêiner */
`;

export const ImageInput = styled.input`
    position: absolute;
    width: 80%;
    padding: 20px;
    margin-top: 5px; /* Adjusted margin to create space between title and input */
    border: 1px solid #fff;
    border-radius: 20px;
    box-sizing: border-box;
    background: #ff;

`;

export const Title = styled.div`
    font-size: 1rem;
    color: #DF2469;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 50%;
`;

export const QtdPriceContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const QtdContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 70%;
    padding: 20px;
    margin-top: 5px; /* Adjusted margin to create space between title and input */
    border: 1px solid #AECAFF;
    border-radius: 20px;
    box-sizing: border-box;
    background: #AECAFF;
`;

export const Qtd = styled.div`
    font-size: 1rem;
    color: #DF2469;
`;

export const QtdInput = styled.input`
    width: 80%;
    padding: 15px;
    margin-top: 5px; /* Adjusted margin to create space between title and input */
    border: 1px solid #FEBAC5;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FEBAC5;
`;

export const Price = styled.div`
    font-size: 1rem;
    color: #DF2469;
`;

export const PriceInput = styled.input`
    width: 100%;
    padding: 15px;
    margin-top: 5px; /* Adjusted margin to create space between title and input */
    border: 1px solid #FEBAC5;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FEBAC5;
`;

export const Category = styled.div`
    font-size: 1rem;
    color: #DF2469;
`;

export const CategoryInput = styled.input`
    width: 70%;
    padding: 15px;
    margin-top: 5px; /* Adjusted margin to create space between title and input */
    border: 1px solid #FEBAC5;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FEBAC5;
`;

export const AddButton = styled.button`
  font-size: 0.8rem;
  height: 50px;
  margin: 1rem 1rem ;
  width: 150px;
  border-radius: 30px;
  background: #FF2273;
  color: #fff;
  transition: 0.2 ease-out;
  border-color: transparent ;

  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #FF2273;
  }
`

export const CategorySelect = styled.select`
    width: 70%;
    padding: 15px;
    margin-top: 5px;
    border: 1px solid #FEBAC5;
    border-radius: 20px;
    box-sizing: border-box;
    background: #FEBAC5;
    color: #555; /* Cor do texto */
`;

// Você também precisa adicionar o estilo para as opções dentro do select, para garantir consistência visual
export const CategoryOption = styled.option`
    background: #FEBAC5;
    color: #555; /* Cor do texto */
`;
