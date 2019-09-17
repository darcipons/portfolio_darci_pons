import React from 'react'; 
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
      <Nav className="justify-content-end" id='nav-bar' activeKey="/home">
        <div className="nav_item">
        <Nav.Item>
          <Link className="text" to={'/'}>Home</Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Link className="text" to={'/projects'}>Projects</Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Link className="text" to={'/about'}>About Me</Link>
        </Nav.Item>
        </div>
      </Nav>
    </div>
  )
}

export default Navbar 
