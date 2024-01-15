import React from 'react';
import { SignContainer, SingupForm, FormInput, FormLabel, SingupButton, Title, SignFormContainer, ImageContainer,RouteLogin } from './SignupElements';
import { Link } from 'react-router-dom'; 

const SignUp = () => {
    return (
        <SignContainer>
            <SignFormContainer>
                <Title>Sign Up</Title>
                    <SingupForm>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <FormInput type="text" id="nome" placeholder='Digite seu nome'/>
                        <FormLabel htmlFor="e-mail">E-mail</FormLabel>
                        <FormInput type="text" id="e-mail" placeholder='Digite seu e-mail'/>
                        <FormLabel htmlFor="password">Senha</FormLabel>
                        <FormInput type="text" id="password" placeholder='Digite sua senha'/>
                        <FormLabel htmlFor="checkpassword">Repita a senha</FormLabel>
                        <FormInput type="text" id="checkpassword" placeholder='Digite sua senha novamente'/>

                        <SingupButton type="submit">Sing Up</SingupButton>
                        <RouteLogin>Já tem uma conta? <Link to="/login"> Clique aqui</Link></RouteLogin>
                    </SingupForm>
            </SignFormContainer>
            <ImageContainer/>
        </SignContainer>
    );
}

export default SignUp