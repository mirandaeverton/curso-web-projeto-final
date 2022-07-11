import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config/bootstrap'

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2ZXJ0b24gQSBNaXJhbmRhIiwiZW1haWwiOiJldmVydG9uLm1pcmFuZGFAaW5zdGFsdGVjaC5wdCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc0NjMyNDEsImV4cCI6MTY1NzcyMjQ0MX0.V-vs-u2gz2jBi5X5umX8bjgaGmK8s3FxOaSSZmZ0cY8'

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
