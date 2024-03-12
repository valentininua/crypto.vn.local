// eslint-disable-next-line no-unused-vars
import React from 'react'

import Home from './Home';
import Navbar from  './Navbar'
import About from  './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
          <Home button={'Info'} value={1} title={'hello world'}/>
          <a href={'about'}>About.jsx</a>
          <br/>
          <a href={'navbar'}>Navbar.jsx</a>
          <br/>

          <BrowserRouter>
              <Routes>
                  <Route path="about" element={<About/>}/>
                  <Route path="navbar" element={<Navbar/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App
