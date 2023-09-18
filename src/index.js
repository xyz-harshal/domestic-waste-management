import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Toaster/>
  </React.StrictMode>
);
