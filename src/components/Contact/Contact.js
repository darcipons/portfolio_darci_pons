import React from 'react'; 
import linkedin from './linkedin.png'
import github from './github_black.png'
import './Contact.css'

const Contact = () => {

  return (
    <footer>
    <div className="contact">
      <div className="contact_me">Contact Me!</div>
      <div className="icon_container">
          <a href="https://www.linkedin.com/in/darci-pons/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linked in icon" className="icons"/>
          </a>
          <a href="https://github.com/darcipons" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github icon" className="icons"/>
          </a>
      </div>
    </div>
    </footer>
  )
}

export default Contact
