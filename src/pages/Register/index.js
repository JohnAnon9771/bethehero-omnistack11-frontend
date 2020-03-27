import React from 'react';
import { Link } from 'react-router-dom';

import { Form } from '@unform/web';
import { FiArrowLeft } from 'react-icons/fi';
import Input from '../../components/Input';

import logo from '../../assets/logo.svg';

import { Container, Content, InputGroup } from './styles';

export default function Register() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            casos da sua ONG.
          </p>
          <Link to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o logon
          </Link>
        </section>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="Whatsapp" />
          <InputGroup>
            <Input name="city" placeholder="Cidade" />
            <Input name="uf" placeholder="UF" style={{ width: 80 }} />
          </InputGroup>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
