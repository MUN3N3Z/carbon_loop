import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Footer from './components/footer';
import ContactForm from './components/contactForm';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/contact' exact Component={ContactForm}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
