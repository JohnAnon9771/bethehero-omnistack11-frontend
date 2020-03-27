import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

import api from '../../service/api';

import logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

export default function NewIncidents() {
  const history = useHistory();
  const ongId = localStorage.getItem('ongId');
  async function handleSubmit(data) {
    try {
      await api.post(
        '/incidents',
        { ...data },
        {
          headers: {
            Authorization: ongId,
          },
        }
      );
      toast.success(`Parabéns! Caso cadastrado com sucesso.`);
      history.push('/profile');
    } catch (error) {
      toast.error('Falha no cadastro, tente novamente mais tarde!');
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para a home
          </Link>
        </section>
        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Titulo do caso" />
          <TextArea name="description" placeholder="Descrição" />
          <Input name="value" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
