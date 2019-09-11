import React from 'react'; 
import { Nav } from 'react-bootstrap';
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
      <Nav className="justify-content-end" id='nav-bar' activeKey="/home">
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/about">About Me</Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
    </div>
  )
}

export default Navbar 
