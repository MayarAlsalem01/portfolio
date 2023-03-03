import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages';

import register from "./serviceWorker";

function App() {

  register();
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
