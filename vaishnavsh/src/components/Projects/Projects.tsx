import React from 'react'
import './Projects.scss'
import ProjectInfo from './ProjectData'
import Project from './Project'

import projectOne from '../../assets/projects/project1.png'
import projectTwo from '../../assets/projects/project2.png'

const projectsList:ProjectInfo[] = [
  {
    name: "Three Js Rocket Scene",
    projectType: "Three Js Project",
    description: "A three js scene with PSLV. Just completed three js journey course, and to test what I've learned, decided to make a small scene integrating threejs with HTML.Made a low poly PSLV model in blender, UV unwrapped it, baked the textures, and exported it. Imported the model into threejs, and integrated it with the HTML loading screen and some other HTML elements. Hosted the whole project on Github Pages. Along with threejs, Vite js was used.",
    stack: ["Three Js","Vite","HTML","CSS"],
    source: "https://github.com/vaishnav/threejs_rockets",
    demo: "https://vaishnav.github.io/threejs_rockets/",
    image: projectOne
  },
  {
    name: "Maze Generator/Solver",
    projectType: "Path Finding Algorithms Project",
    description: "Generating non-perfect mazes and solving them with different algorithms (GUI),Maze is generated using recursive backtracking and than randomly erasing walls between blocks to generate non-perfect maze. Generated maze can be solved with various graph algorithms",
    stack: ["Python","Pygame","DSA"],
    source: "https://github.com/vaishnav/maze_generator_solver",
    demo: "",
    image: projectTwo
  }
]

const Projects = () => {
  return (
    <div className="container">
      {projectsList.map((project)=>(<Project key={project.name} project={project}></Project>))}
    </div>
  )
}

export default Projects