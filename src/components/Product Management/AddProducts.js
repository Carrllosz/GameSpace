import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
    AddProductsContainer,
    TextAdd,
    InfoProductContainer,
    ImageProduct,
    ImageInput,
    Title,
    InfoContainer,
    QtdPriceContainer,
    QtdContainer,
    PriceContainer,
    Input,
    Qtd,
    QtdInput,
    Price,
    PriceInput,
    Category,
    CategorySelect, // Alteração feita aqui
    AddButton
} from './AddElements'; // Importando os estilos

const AddProducts = () => {
    const [values, setValues] = useState({
        nome: "",
        descricao: "",
        preco: "",
        categoria: "",
        quantidade: "",
        foto: ""
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false); // Resetando o estado de erro
        try {
            await axios.post('http://localhost:8800/produtos', values);
            setSuccess(true);
            navigate('/');
        } catch (err) {
            console.error(err);
            setError(true);
        }
    };

    console.log(values)

    return (
        <AddProductsContainer>
            <TextAdd>Adicionar Novo Produto</TextAdd>
            <InfoProductContainer>
                <ImageProduct>
                    <ImageInput
                        type="text" // Mudamos para texto para aceitar a URL da imagem
                        placeholder="URL da Foto"
                        name="foto"
                        onChange={handleChange}
                    />
                </ImageProduct>
                <InfoContainer>
                    <Title>Nome do produto</Title>
                    <Input
                        type="text"
                        placeholder="Nome do produto"
                        name="nome"
                        onChange={handleChange}
                        value={values.nome}
                    />
                    <Title>Descrição</Title>
                    <Input
                        as="textarea"
                        rows={5}
                        placeholder="Descrição"
                        name="descricao"
                        onChange={handleChange}
                        value={values.descricao}
                    />
                    <QtdPriceContainer>
                        <QtdContainer>
                            <Qtd>Quantidade</Qtd>
                            <QtdInput
                                type="number"
                                placeholder="Quantidade"
                                name="quantidade"
                                onChange={handleChange}
                                value={values.quantidade}
                            />
                        </QtdContainer>
                        <PriceContainer>
                            <Price>Preço</Price>
                            <PriceInput
                                type="number"
                                placeholder="Preço"
                                name="preco"
                                onChange={handleChange}
                                value={values.preco}
                            />
                        </PriceContainer>
                    </QtdPriceContainer>
                    <Category>Categoria</Category>
                    <CategorySelect // Alteração feita aqui
                        name="categoria"
                        onChange={handleChange}
                        value={values.categoria}
                    >
                        <option value="">Selecione uma categoria</option>
                        <option value="jogos">Jogos</option>
                        <option value="acessorios">Acessórios</option>
                        <option value="eletronicos">Eletrônicos</option>
                    </CategorySelect>
                    <AddButton onClick={handleSubmit}>Adicionar</AddButton>
                    {error && <p>Algo deu errado! Por favor, tente novamente.</p>}
                    {success && <p>Produto adicionado com sucesso!</p>}
                    <Link to="/View">Ver todos os produtos</Link>
                </InfoContainer>
            </InfoProductContainer>
        </AddProductsContainer>
    );
};

export default AddProducts;
