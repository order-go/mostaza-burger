import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CartProvider} from './hooks/useCart';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
)
