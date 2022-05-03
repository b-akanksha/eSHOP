import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout';
import Header from './components/header';
import HomePage from './components/homepage';
import Login from './components/login';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="cart" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
