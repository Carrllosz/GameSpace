import React, { useState } from 'react';
import { SignContainer, SingupForm, FormInput, FormLabel, SingupButton, Title, SignFormContainer, ImageContainer, RouteLogin, FormlabelUser, FormInputUser } from './SignupElements';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [values, setValues] = useState({
        nome: "",
        email: "",
        senha: "",
        tipodeusuario: ""
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Perform validation
        let error = {};
        const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (values.nome.trim() === "") {
            error.nome = "Nome é obrigatório";
        }

        if (values.email.trim() === "") {
            error.email = "Email é obrigatório";
        } else if (!email_pattern.test(values.email)) {
            error.email = "Email não está válido";
        }

        if (values.senha.trim() === "") {
            error.senha = "Senha é obrigatória";
        } else if (values.senha.trim().length < 6) {
            error.senha = "Senha deve conter pelo menos 6 caracteres";
        }

        setErrors(error);

        // Check if there are no errors before submitting the form
        if (Object.keys(error).length === 0) {
            axios.post('http://localhost:8800/user/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
        }
    };

    return (
        <SignContainer>
            <SignFormContainer>
                <Title>Sign Up</Title>
                <SingupForm onSubmit={handleSubmit}>
                    <FormLabel htmlFor="nome">Nome</FormLabel>
                    <FormInput type="text" name="nome" placeholder='Digite seu nome'  onChange={handleInput}/>
                    {errors.nome && <span style={{color: "red", fontSize: "15px"}} className='text-danger'>{errors.nome}</span>}  
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormInput type="text"  name="email" placeholder='Digite seu e-mail'  onChange={handleInput}/>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormInput type="password" name="senha" placeholder='Digite sua senha'  onChange={handleInput} autoComplete="current-password"/>
                    {errors.senha && <span className='text-danger'>{errors.senha}</span>}
                    <FormlabelUser>
                        <label>
                            <FormInputUser type='radio' id="cliente" name="tipodeusuario" value="cliente" onChange={handleInput} />
                            Usuário
                        </label>
                        <label>
                            <FormInputUser type='radio' id="empresa" name="tipodeusuario" value="empresa" onChange={handleInput} />
                            Empresa
                        </label>
                    </FormlabelUser>
                    <SingupButton type="submit" >Sing Up</SingupButton>
                    <RouteLogin>Já tem uma conta? <Link to="/"> Clique aqui</Link></RouteLogin>
                </SingupForm>
            </SignFormContainer>
            <ImageContainer/>
        </SignContainer>
    );
};

export default SignUp;
