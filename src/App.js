import React from 'react';
// import Navigation Component
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      {/*start the Links */}
      <Navbar />
      {/*end the Links */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' exact Component={About}></Route>
        <Route path='/services' exact Component={Services}></Route>
        <Route path='/products' exact Component={Products}></Route>
        <Route path='/contact' exact Component={Contact}></Route>
        <Route path='/sign-up' exact Component={SignUp}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
