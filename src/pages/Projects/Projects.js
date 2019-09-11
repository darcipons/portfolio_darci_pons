import React from 'react'
import './Projects.css'
import hangry from './hangry.png'
import happydog from './happydog.png'

const Projects = () => {
  return (
    <div className="all_projects">
      <div className="hangry">
        <p>Hangry</p>
        <img src={hangry} alt='hangry' className="hangry_img"></img>
      </div>

      <div className="happydog">
        <p>HappyDog</p>
        <img src={happydog} alt='happydog' className="happydog_img"></img>
      </div>
    </div>
  )
}

export default Projects 
