import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import Navbar from './components/Navigation/Navbar'
import './App.css';
import Contact from './components/Contact/Contact';


const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="background"> */}
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Contact/>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
