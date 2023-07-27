import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import AppRoutes from './pages/routes';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <AppRoutes />
    </BrowserRouter>
    </>
  );
}

export default App;
