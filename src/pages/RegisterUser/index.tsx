import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import api from '../../services/api';
import Logo from '../../assets/LOGO (1).png';

import { Container } from './styles';

function RegisterUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { Login, signed } = useAuth();
  async function handleRegisterNewUser(e: FormEvent) {
    e.preventDefault();
    const response = await api.post('api/register', {
      name,
      email,
      password,
    });
    if (response.data.status === 'sucess') {
      await Login({
        email,
        password,
      });
    }
    console.log(response.data);
  }
  if (signed) {
    navigate('/');
  }
  return (
    <Container>
      <img src={Logo} alt="cryto_racing" />

      <form onSubmit={handleRegisterNewUser}>
        <fieldset>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <button type="submit">Sign-Up</button>
      </form>
    </Container>
  );
}

export default RegisterUser;
