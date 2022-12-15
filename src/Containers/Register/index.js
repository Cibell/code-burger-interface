import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImage from '../../assets/register-imag.svg'
import api from '../../services/api'
import Button from './../../components/Button'
import { Container, ContainerItem, Label, Error, Input, Link } from './styles'

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required('O nome é obrigatório'),
    email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
    password: yup.string().required('Senha é obrigatório').min(6, 'Senha deve ter 6 digitos'),
    confirmPassword: yup.string().required('Senha é obrigatório').min(6, 'Senha deve ter 6 digitos').oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async clientData => {
    const response = await api.post('users', {
      name: clientData.name,
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <img src={RegisterImage}/>

      <ContainerItem>
       <img src={Logo}/>

        <h1>Cadastre-se</h1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label error={errors.name?.message}>Nome</Label>
        <Input type='text' {...register('name')} error={errors.name?.message}/>
        <Error>{errors.name?.message}</Error>

        <Label error={errors.email?.message}>Email</Label>
        <Input type='email' {...register('email')} error={errors.email?.message}/>
        <Error>{errors.email?.message}</Error>

        <Label error={errors.password?.message}>Password</Label>
        <Input type='password' {...register('password')} error={errors.password?.message}/>
        <Error>{errors.password?.message}</Error>

        <Label error={errors.confirmPassword?.message} >Confirmar Senha</Label>
        <Input type='password' {...register('confirmPassword')} error={errors.confirmPassword?.message}/>
        <Error>{errors.confirmPassword?.message}</Error>

        <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }} >Sign Up</Button>

        <Link>Já possui conta ? <a>Sign Up</a></Link>
        </form>

      </ContainerItem>

    </Container>
  )
}

export default Register
