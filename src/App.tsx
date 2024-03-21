import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Items from './components/items';
import ItemPage from './components/itempage';
import ItemAdmin from './components/ItemAdmin';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/items' element={<Items/>}/>
        <Route path='/items/:id' element={<ItemPage/>}/>
        <Route path='/itemadmin' element={<ItemAdmin/>}/>
      </Routes>
        <Footer/>
    </Router>

  );
}

export default App;
