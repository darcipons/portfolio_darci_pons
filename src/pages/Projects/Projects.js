import React from 'react'
import { Card } from 'react-bootstrap'
import './Projects.css'
import hangry from './hangry.png'
import happydog from './happydog.png'
import dog from './dog.png'
import foodhouse from './foodhouse.png'
import todo from './todo_app.png'

const Projects = () => {
  return (
    <div className='projects_container'>
      <div className="projects_title">Projects</div>

      <div className="all_projects">

        <Card className='card1' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={hangry} />
          <Card.Body>
            <Card.Title>Hangry</Card.Title>
            <Card.Text>
              Created using: JavaScript, React, & Yelp API
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#" target="_blank">GitHub</Card.Link>
            <Card.Link href="https://wyn-hangry.herokuapp.com" target="_blank">Heroku Site</Card.Link>
          </Card.Body>
        </Card>

        <Card className='card2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={happydog} />
          <Card.Body>
            <Card.Title>HappyDog</Card.Title>
            <Card.Text>
              Created using: Ruby on Rails and TheDogAPI
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/darcipons/darci_edwin_jajuan_syed" target="_blank">GitHub</Card.Link>
            <Card.Link href="https://happydog101.herokuapp.com" target="_blank">Heroku Site</Card.Link>
          </Card.Body>
        </Card>

        <Card className='card3' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dog} />
          <Card.Body>
            <Card.Title>Dog Picture</Card.Title>
            <Card.Text>
              Created using: JavaScript
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/darcipons/random_dog" target="_blank">GitHub</Card.Link>
            {/* <Card.Link href="#">Heroku Site</Card.Link> */}
          </Card.Body>
        </Card>

        <Card className='card4' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={foodhouse} />
          <Card.Body>
            <Card.Title>Food House</Card.Title>
            <Card.Text>
              Created using: JavaScript and React
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/darcipons/heroku-food-house" target="_blank">GitHub</Card.Link>
            <Card.Link href="https://darci-food-house.herokuapp.com" target="_blank">Heroku Site</Card.Link>
          </Card.Body>
        </Card>

        <Card className='card5' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={todo} />
          <Card.Body>
            <Card.Title>Todo App</Card.Title>
            <Card.Text>
              Created using: Flutter
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="https://github.com/darcipons/todo_flutter" target="_blank">GitHub</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Projects 
