import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import GlobalProvider from './hooks/GlobalProvider.tsx';
import './index.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
