import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home/home'
import About from './pages/about/about'
import Projetos from './pages/portfolio/portfolio'
import Contact from './pages/contact/contact'
import Resume from './pages/resume/resume'
import React from 'react'


function App() {
  return (
    <div class="App">
      <div>
      <BrowserRouter>

<Routes>
<Route element={<Home />} path="" />
<Route element={<About />} path="/about" />
<Route element={<Contact />} path="/contact" />
<Route element={<Resume />} path="/resume"/>
<Route element={<Projetos />} path="/portfolio"/>

  <Route path='*' element={<div><h1>Página não encontrada!!</h1>
  <img src="https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif" alt="" />
  </div>} />



</Routes>
</BrowserRouter>

      </div>
  
    </div>
  );
}

export default App;
