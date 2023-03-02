import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages';
import * as serviceWorker from './serviceWorker'


function App() {

  return (
    <>
      <Home/>
    </>
  );
}
serviceWorker.register();
export default App;
