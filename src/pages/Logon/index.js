import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Input from '../../components/Input';

import api from '../../service/api';

import logo from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';

import { Container } from './styles';

export default function Logon() {
  const history = useHistory();
  async function handleSubmit(data) {
    try {
      const response = await api.post('sessions', { ...data });
      localStorage.setItem('ongId', data.id);
      localStorage.setItem('ongName', response.data.name);
      toast.success('Logado com sucesso!');
      history.push('/profile');
    } catch (error) {
      toast.error('Falha ao logar! Tente novamente mais tarde.');
    }
  }
  return (
    <Container>
      <section>
        <img src={logo} alt="Be The Hero" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="id" placeholder="Sua ID" />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </section>
      <img src={heroImg} alt="Heroes" />
    </Container>
  );
}
