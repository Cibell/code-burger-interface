import React from 'react'

import LoginImg from '../../assets/login-imag.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItem,
  Label,
  Input,
  Button,
  SignInLink
} from './styles'

function Login () {
  return (
        <Container>
          <LoginImage src={LoginImg} alt="login-image"/>
          <ContainerItem>
            <img src={Logo} alt="logo"/>
            <h1>Login</h1>

            <Label>Email</Label>
            <Input/>

            <Label>Password</Label>
            <Input/>

            <Button>Sign In</Button>
            <SignInLink>Não possui conta? <a>Sign up</a></SignInLink>

          </ContainerItem>

        </Container>
  )
}

export default Login
