import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Navbar from './components/Navigation/Navbar'
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
    </div>
    </BrowserRouter>
  );
}

export default App;
