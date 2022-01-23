import React from 'react';
import PageRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { AuthContextProvider } from './contexts/authContext';

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyles />
      <PageRoutes />
    </AuthContextProvider>
  );
}

export default App;
