import React from 'react';
import { useMoralis } from 'react-moralis';
import { Link } from 'react-router-dom';

import { ContainerNavBar, NavBarMenu } from './styles';

export function NavBar() {
  const { logout, authenticate, isAuthenticated } = useMoralis();
  return (
    <ContainerNavBar>
      <h1>NFT SALE</h1>
      <NavBarMenu>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/inventory">Inventário</Link>
          </li>
        </ul>
      </NavBarMenu>
      {isAuthenticated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <button onClick={() => authenticate()}>Conectar com a Metamask</button>
      )}
    </ContainerNavBar>
  );
}
