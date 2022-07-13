import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './config/bootstrap'

//TEMPORÁRIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkV2ZXJ0b24gQSBNaXJhbmRhIiwiZW1haWwiOiJldmVydG9uLm1pcmFuZGFAaW5zdGFsdGVjaC5wdCIsImFkbWluIjp0cnVlLCJpYXQiOjE2NTc3NDQzNzYsImV4cCI6MTY1ODAwMzU3Nn0.33X0Yiet8BqLQzXiu1iNZsUr1_rIhAZ9JLUdBNLPxnA'

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
