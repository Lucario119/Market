import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InventoryPage from './pages/InventoryPage';

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="inventory" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
