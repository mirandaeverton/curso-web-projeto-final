import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'font-awesome/css/font-awesome.css'
import './config/bootstrap'

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2ZXJ0b24gTWlyYW5kYSIsImVtYWlsIjoiZXZlcnRvbi5taXJhbmRhQGluc3RhbHRlY2gucHQiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjU1MDY1NTgzLCJleHAiOjE2NTUzMjQ3ODN9.DJ0CFwsmkd3U_GLNF4jpB5Jjip6xiUfHzocSL1lwxmg'

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
