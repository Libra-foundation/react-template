import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './App';
import ReportWebVitals from './Scripts/reportWebVitals';

const ROOT = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
ROOT.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
