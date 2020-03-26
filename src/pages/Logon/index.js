import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FiLogIn } from 'react-icons/fi';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';
import heroImg from '../../assets/heroes.png';

import { Container } from './styles';

export default function Logon() {
  function handleSubmit(data) {}
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
