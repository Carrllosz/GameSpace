import React, { useState }  from 'react';
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', { email, password})
      .then(result => {
        console.log(result)
        if(result.data === "Sucesso") {
          navigate('/')
        } 
      })
      .catch(err=> console.log(err))
  }
  return (
    <LoginContainer>
      <LoginFormContainer>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <FormInput type="text" id="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <FormInput type="password" id="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
          <LoginButton type="submit">Login</LoginButton>
          <RouteSingup>Não tem uma conta? <Link to="/Signup"> Clique aqui</Link></RouteSingup>
        </LoginForm>
      </LoginFormContainer>
      <ImageContainer/>
    </LoginContainer>
  );
};

export default Login;
