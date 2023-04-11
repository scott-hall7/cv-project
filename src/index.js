import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/main.scss'
import './styles/header.scss'
import './styles/footer.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

