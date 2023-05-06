import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

