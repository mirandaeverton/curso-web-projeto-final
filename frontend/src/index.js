import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config/bootstrap'

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2ZXJ0b24gTWlyYW5kYSIsImVtYWlsIjoiZXZlcnRvbi5taXJhbmRhQGluc3RhbHRlY2gucHQiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2MTYyMTYxLCJleHAiOjE2NTY0MjEzNjF9.p2zZI2F0l_V3ZJJTnfUV3pJr1uzH84NvKxJwPTsdAs8'

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
