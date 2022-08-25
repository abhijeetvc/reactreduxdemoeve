import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Redux : State management Library
// Terminology :
    // actions - constants (type and payload)
    // reducer - function that consists of state and action
    // store  - object which hold some value
    // connect - function to bind react and redux
    // dispatch - function used to trigger reducer

