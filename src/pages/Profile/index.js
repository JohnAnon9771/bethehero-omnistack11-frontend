import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.svg';

import api from '../../service/api';

import { Container, Header } from './styles';

export default function Profile() {
  const [profile, setProfile] = useState('');
  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');
  const history = useHistory();

  useEffect(() => {
    async function getData() {
      const response = await api.get('profile', {
        headers: {
          Authorization: ongId,
        },
      });
      setProfile(response.data[0]);
    }
    getData();
  }, [profile]);

  async function handleDelete(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        },
      });
      // setProfile(profile.incidents?.filter((incident) => incident.id !== id));
    } catch (error) {
      toast.error('Erro ao apagar incidente');
    }
  }
  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Header>
        <img src={logo} alt="" />
        <span>Bem vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button onClick={() => handleLogout()} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>
      <ul>
        {profile.incidents?.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRIÇÂO:</strong>
            <p>{incident.description}</p>
            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>
            <button onClick={() => handleDelete(incident.id)} type="button">
              <FiTrash2 size={16} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
