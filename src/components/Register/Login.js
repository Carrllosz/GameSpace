import React, { useState } from 'react';
import {
  Title,
  LoginContainer,
  LoginForm,
  FormLabel,
  FormInput,
  LoginButton,
  LoginFormContainer,
  ImageContainer,
  RouteSingup,
} from './LoginElements';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Validation from './LoginValidation';

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    senha: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  
    if (Object.keys(errors).length === 0) {
      axios.post('http://localhost:8800/user/login', values)
        .then(res => {
          if (res.data === "Sucesso") {
            navigate("/dashboard"); // Redireciona para a página principal após o login
          } else {
            alert("Não há usuário com essas credenciais!");
          }
        })
        .catch(err => {
          console.error("Erro durante a requisição:", err);
          alert("Ocorreu um erro durante a autenticação. Por favor, tente novamente mais tarde.");
        });
    }
  };

  return (
    <LoginContainer>
      <LoginFormContainer>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput type="text" id="email" name="email" onChange={handleInput}/>
          {errors.email && <span className='text-danger'>{errors.email}</span>}
          <FormLabel htmlFor="password">Senha</FormLabel>
          <FormInput type="password" id="password" name="senha" onChange={handleInput}/>
          {errors.senha && <span className='text-danger'>{errors.senha}</span>}
          <RouteSingup>Não tem uma conta? <Link to="/signup"> Clique aqui</Link></RouteSingup>
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </LoginFormContainer>
      <ImageContainer/>
    </LoginContainer>
  );
};

export default Login;
