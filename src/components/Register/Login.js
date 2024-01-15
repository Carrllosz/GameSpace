import React from 'react';
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
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <LoginContainer>
      <LoginFormContainer>
        <Title>Login</Title>
        <LoginForm>
          <FormLabel htmlFor="e-mail">E-mail</FormLabel>
          <FormInput type="text" id="e-mail" placeholder="Digite seu e-mail" />
          <FormLabel htmlFor="password">Senha</FormLabel>
          <FormInput type="password" id="password" placeholder="Digite sua senha" />

          <LoginButton type="submit">Login</LoginButton>
          <RouteSingup>Não tem uma conta? <Link to="/Signup"> Clique aqui</Link></RouteSingup>
        </LoginForm>
      </LoginFormContainer>
      <ImageContainer/>
    </LoginContainer>
  );
};

export default Login;
