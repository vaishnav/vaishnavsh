import React from 'react'
import ProjectInfo from './ProjectData'

interface ProjectProps {
    project: ProjectInfo
}

const Project = (props:ProjectProps) => {
    const project = props.project 
    return (
        <div className="project-body">
            <div className="project-info">
                <div className="project-type">
                    {project.projectType.toUpperCase()}
                </div>
                <div className="project-name">
                    {project.name}
                </div>
                <div className="project-description">
                    {project.description}
                </div>
            </div>
            <div className='project-image'>
                <img src={project.image} alt="" />
            </div>
        </div>
    )
}

export default Project