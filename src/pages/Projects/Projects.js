import React from 'react'
import './Projects.css'
import hangry from './hangry.png'
import happydog from './happydog.png'

const Projects = () => {
  return (
    <div className="all_projects">
      <div className="hangry">
        <div className="title">Hangry</div>
        <a href='https://wyn-hangry.herokuapp.com/' target='_blank' rel="noopener noreferrer">
        <img src={hangry} alt='hangry' className="hangry_img"></img>
        </a>      
      </div>

      <div className="happydog">
        <div className="title">HappyDog</div>
        <a href='https://happydog101.herokuapp.com/' target='_blank' rel="noopener noreferrer">
        <img src={happydog} alt='happydog' className="happydog_img"></img>
        </a>
      </div>
    </div>
  )
}

export default Projects 
