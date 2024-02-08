import React, { useState } from 'react';
import { SignContainer, SingupForm, FormInput, FormLabel, SingupButton, Title, SignFormContainer, ImageContainer, RouteLogin, FormlabelUser, FormInputUser } from './SignupElements';
import {  Link } from 'react-router-dom'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userType, setUserType] = useState('user')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando dados para registro:', name, email, password, userType);  
        axios.post('http://localhost:3001/register', { name, email, password, userType })
          .then(result => {
            console.log(result);
            setUserType('user');
            navigate('/login');
          })
          .catch(err => console.log(err));
      }


    return (
        <SignContainer>
            <SignFormContainer>
                <Title>Sign Up</Title>
                    <SingupForm onSubmit={handleSubmit}>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <FormInput type="text" id="nome" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)}/>
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <FormInput type="text" id="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
                        <FormLabel htmlFor="password">Senha</FormLabel>
                        <FormInput type="password" id="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)}/>
                        <FormlabelUser>
                            <label>
                                <FormInputUser type='radio' id="user" value="user" checked={userType === 'user'} onChange={() => setUserType('user')} />
                                Usuário
                            </label>
                            <label>
                                <FormInputUser type='radio' id="company" value="company" checked={userType === 'company'} onChange={() => setUserType('company')} />
                                Empresa
                            </label>
                        </FormlabelUser>
                        <SingupButton type="submit" >Sing Up</SingupButton>
                        <RouteLogin>Já tem uma conta? <Link to="/login"> Clique aqui</Link></RouteLogin>
                    </SingupForm>
            </SignFormContainer>
            <ImageContainer/>
        </SignContainer>
    );
}

export default SignUp