import React from 'react'
import './Projects.scss'
import ProjectInfo from './ProjectData'
import Project from './Project'
import Heading from '../Heading/Heading'


const projectsList:ProjectInfo[] = [
  {
    name: "Portfolio Website",
    projectType: "React and Spline Project",
    description: "Interactive portfolio built with React, TypeScript, and 3D design from Spline.",
    stack: ["TypeScript", "React", "Vite", "SASS"],
    source: "https://github.com/vaishnav/vaishnavsh",
    demo: "https://vaishnavsh.com/",
  },
  {
    name: "Three Js Rocket Scene",
    projectType: "Three Js Project",
    description: "3D WebApp, users can look around and interact in a 3D environment on a browser. Integration of 3D Elements with HTML",
    stack: ["Three Js","Vite","HTML","CSS"],
    source: "https://github.com/vaishnav/threejs_rockets",
    demo: "https://vaishnav.github.io/threejs_rockets/",
  },
  {
    name: "Interactive 3D scene",
    projectType: "",
    description: "3D WebApp, users can look around and interact in the browser",
    stack: ["Three Js","Vite"],
    source: "https://github.com/vaishnav/threejs_scene",
    demo: "https://vaishnav.github.io/threejs_scene/",
  },
  {
    name: "Maze Generator/Solver",
    projectType: "Path Finding Algorithms Project",
    description: "Generating mazes with the help of python and solving them with the help of different path finding algorithms",
    stack: ["Python","Pygame","DSA"],
    source: "https://github.com/vaishnav/maze_generator_solver",
    demo: "",
  },
  {
    name: "Movie API",
    projectType: "",
    description: "Backend API for managing movies, along with details like movie title, director, rating or genere",
    stack: ["Django-Rest-Framework","Authentication"],
    source: "https://github.com/vaishnav/movie_django_rest_api/tree/main/MovieApi",
    demo: "",
  },
  {
    name: "Search Engine From Scratch",
    projectType: "",
    description: "Making a search engine that can crawl the web, index the websites and rank them with the help of page-rank algorithm",
    stack: ["Beautiful-Soup","Django"],
    source: "https://github.com/vaishnav/SearchEngine",
    demo: "",
  }
]

const Projects = () => {
  return (
    <div className='container' id='projects'>
      <Heading header='My Projects' info='Some of my Recent Projets, feel free to check Source or Demo'></Heading>
      <div className="project-layout">
        {projectsList.map((project)=>(<Project key={project.name} project={project}></Project>))}
      </div>
    </div>
  )
}

export default Projects