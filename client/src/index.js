import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  
  <BrowserRouter>
 
  <Routes>
      
      <Route index element={<Home/>}/>
      <Route path="/app" element={<App/>}/>
  </Routes>
  </BrowserRouter>
 
  </>
  

 
);
reportWebVitals();
