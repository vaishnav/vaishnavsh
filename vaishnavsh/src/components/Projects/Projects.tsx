import React from 'react'
import './Projects.scss'
import ProjectInfo from './ProjectData'
import Project from './Project'
import Heading from '../Heading/Heading'

import projectOne from '../../assets/projects/project1.png'
import projectTwo from '../../assets/projects/project2.png'

const projectsList:ProjectInfo[] = [
  {
    name: "Three Js Rocket Scene",
    projectType: "Three Js Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea.Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Three Js","Vite","HTML","CSS"],
    source: "https://github.com/vaishnav/threejs_rockets",
    demo: "https://vaishnav.github.io/threejs_rockets/",
    image: projectOne
  },
  {
    name: "Maze Generator/Solver",
    projectType: "Path Finding Algorithms Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Python","Pygame","DSA"],
    source: "https://github.com/vaishnav/maze_generator_solver",
    demo: "",
    image: projectTwo
  },
  {
    name: "Three Js Rocket Scene",
    projectType: "Three Js Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Three Js","Vite","HTML","CSS"],
    source: "https://github.com/vaishnav/threejs_rockets",
    demo: "https://vaishnav.github.io/threejs_rockets/",
    image: projectOne
  },
  {
    name: "Maze Generator/Solver",
    projectType: "Path Finding Algorithms Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Python","Pygame","DSA"],
    source: "https://github.com/vaishnav/maze_generator_solver",
    demo: "",
    image: projectTwo
  },
  {
    name: "Three Js Rocket Scene",
    projectType: "Three Js Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Three Js","Vite","HTML","CSS"],
    source: "https://github.com/vaishnav/threejs_rockets",
    demo: "https://vaishnav.github.io/threejs_rockets/",
    image: projectOne
  },
  {
    name: "Maze Generator/Solver",
    projectType: "Path Finding Algorithms Project",
    description: "Lorem ipsum dolor sit amet, omnis invenire necessitatibus mea at, mutat soleat mea ea. ",
    stack: ["Python","Pygame","DSA"],
    source: "https://github.com/vaishnav/maze_generator_solver",
    demo: "",
    image: projectTwo
  }
]

const Projects = () => {
  return (
    <>
      <Heading header='Projects' info='Some of my Recent Projets, feel free to check Source or Demo'></Heading>
      <div className="container project-layout">
        {projectsList.map((project)=>(<Project key={project.name} project={project}></Project>))}
      </div>
    </>
  )
}

export default Projects