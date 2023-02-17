import { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import './App.scss'

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    </Router>
  )
}

export default App
