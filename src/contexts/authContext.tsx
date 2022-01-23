import React, { createContext, useState, useEffect, ReactNode } from 'react';

import api from '../services/api';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  adminSigned: boolean;
  user: UserProps | null;
  Login(user: object): Promise<void>;
  Logout(): void;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps | null>(null);
  const [admin, setAdmin] = useState<any>();

  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');

    const storagedToken = sessionStorage.getItem('@App:token');
    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
    }

    setAdmin(
      user?.email === 'admin@admin.com' &&
        user?.password === 'adminpassword'
    );
  }, [user?.email, user?.password]);

  async function Login(userData: object) {
    const response = await api.post('api/login', userData);
    setUser(response.data.user);

    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${response.data.token}`;

    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
  }

  function Logout() {
    setUser(null);
    sessionStorage.setItem('@App:user', '');
    sessionStorage.setItem('@App:token', '');
  }

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(user),
        adminSigned: Boolean(admin),
        user,
        Login,
        Logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
