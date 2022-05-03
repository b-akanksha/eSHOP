import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout';
import Header from './components/header';
import HomePage from './components/homepage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="cart" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
