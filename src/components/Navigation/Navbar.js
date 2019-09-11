import React from 'react'; 
import { Nav } from 'react-bootstrap';
import './Navbar.css'

const Navbar = () => {

  return (
    <>
      <Nav className="justify-content-end" id='nav-bar' activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About Me</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default Navbar 
