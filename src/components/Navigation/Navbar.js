import React from 'react'; 
import { Nav } from 'react-bootstrap';
import './Navbar.css'

const Navbar = () => {

  return (
    <div>
      <Nav className="justify-content-end" id='nav-bar' activeKey="/home">
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/" className="text">Home</Nav.Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/projects" className="text">Projects</Nav.Link>
        </Nav.Item>
        </div>
        <div className="nav_item">
        <Nav.Item>
          <Nav.Link href="/about" className="text">About Me</Nav.Link>
        </Nav.Item>
        </div>
      </Nav>
    </div>
  )
}

export default Navbar 
