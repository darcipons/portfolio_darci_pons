import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
    </BrowserRouter>
  );
}

export default App;
