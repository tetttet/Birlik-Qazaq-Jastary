import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import './i18n.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


