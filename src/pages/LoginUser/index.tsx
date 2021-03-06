import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../../assets/LOGO (1).png';

import { Container } from './styles';

function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { Login, signed } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await Login({
      email: email,
      password: password,
    });
    if (email === 'admin@admin.com' && password === 'adminpassword') {
      navigate('/admin');
    }
  }

  if (signed) {
    navigate('/');
  }

  return (
    <Container>
      <img src={Logo} alt="cryto_racing" />
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}

export default LoginUser;
