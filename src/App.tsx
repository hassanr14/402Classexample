import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/about'



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
        <Footer/>
    </Router>

  );
}

export default App;
