import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages';
import registerServiceWorker from "./serviceWorker";
registerServiceWorker();


function App() {
  return (
    <>
      <Home/>
    </>
  );
}

export default App;
