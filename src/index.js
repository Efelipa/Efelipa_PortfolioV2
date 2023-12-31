import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/assets/fonts/BebasNeue-Regular.ttf';
import './components/assets/fonts/Ubuntu-Regular.ttf';
import './components/assets/fonts/Ubuntu-Bold.ttf';
import './components/assets/fonts/SF-Mono-Medium.ttf';
import './components/assets/fonts/SF-Mono-Light.ttf';

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
