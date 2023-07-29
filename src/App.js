import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/footer';
import FAQS from './components/pages/faqs';
import ContactForm from './components/contactForm';
import About from './components/pages/about';
import Tech from './components/pages/technology';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/contact' exact Component={ContactForm}/>
            <Route path='/faqs' exact Component={FAQS}/>
            <Route path='/about' exact Component={About}/>
            <Route path='/technology' exact Component={Tech}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
