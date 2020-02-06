import React from 'react'
import './Projects.css'
import hangry from './hangry.png'
import happydog from './happydog.png'
import dog from './dog.png'
import plant from './plant_card.png'
import todo from './todo_app.png'

const Projects = () => {
  return (
    <div className="all_projects">

      <div className='top_row_container'>
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


        <div className="dog_pic">
          <div className="title">Dog Picture</div>
          <a href='https://github.com/darcipons/random_dog' target='_blank' rel="noopener noreferrer">
          <img src={dog} alt='dog' className="dog_img"></img>
          </a>
        </div>
      </div>


      <div className='flutter_container'>
        <div className="todo">
          <div className="title">Flutter Todo App</div>
          <a href='https://github.com/darcipons/todo_flutter' target='_blank' rel="noopener noreferrer">
          <img src={todo} alt='todo app' className="todo_img"></img>
          </a>
        </div>


        <div className="plant">
          <div className="title">Flutter Business Card</div>
          <a href='https://github.com/darcipons/business_card' target='_blank' rel="noopener noreferrer">
          <img src={plant} alt='plant' className="plant_img"></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects 
