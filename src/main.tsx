import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Promo from './pages/Promo';
import Casilaup from './pages/Casilaup';
import Casiladown from './pages/Casiladown';
import Bienvenida from './pages/Bienvenida';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/casilaup" element={<Casilaup />} />
        <Route path="/casiladown" element={<Casiladown />} />
        <Route path="/bienvenida" element={<Bienvenida />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
