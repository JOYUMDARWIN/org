import React from 'react';//libreria para hacer interfaces graficas
import ReactDOM from 'react-dom/client';//paquete que nos ayuda a trabajar con el react y el DOM de nuestro navegador
import './index.css';//importando estilos
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
