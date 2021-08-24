import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginRouter from './routers/LoginRouter';
import { AppData } from './helpers/AppData';
import { AuthContext } from './context/AuthContext';

function App() {
  const [log, dispatch] = AppData();
  return (
    
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouter />
    </AuthContext.Provider>
  );
}

export default App;
