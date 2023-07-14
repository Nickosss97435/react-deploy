import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/_styles.scss';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Bibliotheque from './screens/Bibliotheque';
import About from './components/sections/About';
import NotFound from './screens/notFound';
import Navbar from './components/UI/Nav/Navbar';
import NavTop from './components/UI/NavTop/TopBar';
import Footer from './components/UI/Footer/Footer';


function App() {
  return (
    <div className='App'>
      <NavTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/Contact" element={<Contact/>}  />
        <Route path="/Bibliotheque" element={<Bibliotheque/>}  />
        <Route path="/About" element={<About/>}  />
        <Route path="*" element={<NotFound/>}  />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
