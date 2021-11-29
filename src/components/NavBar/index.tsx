import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerNavBar, NavBarMenu } from './styles';

export function NavBar() {
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
    </ContainerNavBar>
  );
}
