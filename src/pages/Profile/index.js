import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Container, Header } from './styles';

export default function Profile() {
  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <span>Bem vinda, APAD</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>CASO:</strong>
          <p>caso test</p>
          <strong>DESCRIÇÂO:</strong>
          <p>descrição test</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>
          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>caso test</p>
          <strong>DESCRIÇÂO:</strong>
          <p>descrição test</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>
          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>caso test</p>
          <strong>DESCRIÇÂO:</strong>
          <p>descrição test</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>
          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>caso test</p>
          <strong>DESCRIÇÂO:</strong>
          <p>descrição test</p>
          <strong>VALOR:</strong>
          <p>R$120,00</p>
          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
