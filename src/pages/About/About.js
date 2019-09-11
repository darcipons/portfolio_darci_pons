import React from 'react'
import profile_pic from './profile_pic.png'
import group_pic from './group_pic.png'
import linkedin from './linkedin.png'
import twitter from './twitter.png'
import github from './github_white.png'
import './About.css'


const About= () => {

  return(
    <div>
      <h1 className="about_name">Darci Pons</h1>
      
      <div className="bio">
        <img src={profile_pic} alt="profile pic" className="profile_pic"></img>
        <div className="bio_description">Hi, I am Darci a full stack web developer. I have a bachelor's degree from Florida State University in Psychology. 
          I am a recent graduate from Wyncode Academy. I hope to continue to learn about software development and create some amazing projects.</div>
      </div>
      
      <div>
        <img src={group_pic} alt="group pic" className="group_pic"/>
      </div>

      <div className="contact">
        <div>Contact Me!</div>
      </div>
    </div>
  )
}

export default About
