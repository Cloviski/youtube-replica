import React from 'react';
import ReactDOM from 'react-dom/client';
import { IndexStyle } from './IndexStyle';
import App from './App';
import { AppStore } from './contexts/menuContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IndexStyle />
    <AppStore>
      <App />
    </AppStore>
  </React.StrictMode>
);
