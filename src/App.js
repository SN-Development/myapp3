//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import About from './pages/About';
import Loading from './loading/Loading';
import { useState } from 'react';
import SuccessAlert from './component/succes_alert/SuccessAlert';
import AppointmentPage from './pages/AppointmentPage';
import Appoiintment from './component/appointment copy/Appoiintment';
import NavBar from './component/navbar/NavBar';



function App() {
  
  return (
    <div className="App" id='App'>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
