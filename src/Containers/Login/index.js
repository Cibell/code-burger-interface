import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LoginImage from '../../assets/login-imag.svg'
import Logo from '../../assets/logo.svg'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import Button from './../../components/Button'
import { Container, ContainerItem, Label, Error, Input, Link } from './styles'

const Login = () => {
  const { putUserData, userData } = useUser()

  const schema = yup.object().shape({
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatório').min(6, 'Senha deve ')
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem-vindo(a)',
        error: 'Verifique seus dados'
      }
    )
    putUserData(data)
    console.log(userData)
  }

  return (
    <Container>
      <img src={LoginImage}/>

      <ContainerItem>
       <img src={Logo}/>

        <h1>Login</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <Input type='email' {...register('email')} error={errors.email?.message}/>
        <Error>{errors.email?.message}</Error>

        <Label>Password</Label>
        <Input type='password' {...register('password')} error={errors.password?.message}/>
        <Error>{errors.password?.message}</Error>

        <Button type="submit" style={{ marginTop: 40, marginBottom: 30 }} >Sign In</Button>

        <Link>Não possui conta ? <a>Sign up</a></Link>
        </form>

      </ContainerItem>

    </Container>
  )
}

export default Login
