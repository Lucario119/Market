import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InventoryPage from './pages/InventoryPage';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './PrivateRoute';
import { useAuth } from './hooks/useAuth';

function PageRoutes() {
  const { adminSigned } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="inventory" element={<InventoryPage />} />

        <Route element={<PrivateRoute isAdminLogged={adminSigned} />}>
          <Route path="admin" element={<DashboardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
