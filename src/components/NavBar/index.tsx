import React, { useMemo } from 'react';
import { useMoralis } from 'react-moralis';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../../assets/LOGO.png';
import { ContainerNavBar, NavBarMenu } from './styles';

export function NavBar() {
  const { logout, authenticate, isAuthenticated, user } = useMoralis();
  const { signed } = useAuth();
  const web3Account: string = useMemo(
    () => isAuthenticated && user?.get('accounts')[0],
    [user, isAuthenticated]
  );
  return (
    <ContainerNavBar>
      <img src={Logo} alt="crypto_horse_logo" />
      <NavBarMenu>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>

        <ul>
          {!signed ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/register">Sign-Up</Link>
              </li>
            </>
          ) : (
            <div>
              {isAuthenticated ? (
                <>
                  <li>
                    <p>Hello, {web3Account.slice(0, 10)}...</p>
                  </li>
                  <li className="li">
                    <button onClick={() => logout()}>
                      Disconnect Metamask
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <button onClick={() => authenticate()}>
                    Connect to Metamask
                  </button>
                </li>
              )}
            </div>
          )}
        </ul>
      </NavBarMenu>
    </ContainerNavBar>
  );
}
