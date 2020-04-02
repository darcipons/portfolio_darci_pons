import React from 'react'
import profile_pic from './profile_pic.png'
import './About.css'

const About = () => {

  return(
    <div className="media">
      
      <div className="bio">
        <div className="bio_pic">
          <img src={profile_pic} alt="profile pic" className="profile_pic"></img>
        </div>
        <div className="bio_text">
          <div className="about_name">About</div>
          <div className="about_line"></div>
          <div className="bio_description">Hi, I'm Darci a full stack web developer. I have a bachelor's degree from Florida State University in Psychology. 
            I am a recent graduate from Wyncode Academy. I hope to continue to learn about software development and create some amazing projects. Feel free to contact me at: darcimarie33@gmail.com. </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
