import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Intro from './pages/Intro';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Connect from './pages/Connect';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
