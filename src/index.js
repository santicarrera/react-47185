import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Firebase/config';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
