import React from 'react'
import ProjectInfo from './ProjectData'

import {HiOutlineCode} from 'react-icons/hi'
import {HiExternalLink} from 'react-icons/hi'

interface ProjectProps {
    project: ProjectInfo
}

const Project = (props:ProjectProps) => {
    let sourceIcon, deployedIcon
    const project = props.project 

    if(project.source != ""){
        sourceIcon = <a href={project.source} target="_blank"><HiOutlineCode></HiOutlineCode></a>
    } else {
        sourceIcon = null
    }

    if(project.demo != ""){
        deployedIcon = <a href={project.source} target="_blank"><HiExternalLink></HiExternalLink></a>
    } else {
        deployedIcon = null
    }

    return (
        <div className="project-body">
            <div className='project-image'>
                <img src={project.image} alt="" />
            </div>
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
                <div className="project-links">
                    {sourceIcon}
                    {deployedIcon}
                </div>
                <div className="project-stacks">
                    {project.stack.map((stack)=>(<div>{stack}</div>))}
                </div>
            </div>
        </div>
    )
}

export default Project