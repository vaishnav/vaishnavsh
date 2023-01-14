import React from 'react'
import './Home.scss'
import Table from '../Table/Table'

import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaArtstation } from 'react-icons/fa'


const Home = () => {
  return (
    <div className="container header">
      <div className="left">
        <h4>
          Hi, my name is 
        </h4>
        <p className="header-name">
            Vaishnav <span className="primary">Sharma</span>
        </p>

        <p className="header-about">
            Programmer, Problem-Solver, 3D-Artist and a GEEK.
        </p>
        {/* <div className="">
            Hi, I am Vaishnav Sharma. I like making interesting projects,
            learning new technologies and solving problems.
            I have made projects in web-development, image processing,
            and 3D animation.
        </div> */}
        <div className="header-quick-nav">
          <a className="quick-nav-item" href='mailto:vaishnav291999@gmail.com'><FiMail/></a>
          <a className="quick-nav-item" href='https://www.linkedin.com/in/vaishnav-sharma-1952681a3/' target="_blank"><FiLinkedin/></a>
          <a className="quick-nav-item" href='https://github.com/vaishnav' target="_blank"><FiGithub/></a>
          <a className="quick-nav-item" href='https://ue837ee2a.artstation.com/' target="_blank"><FaArtstation/></a>
          <a className="quick-nav-item" href='https://www.instagram.com/vaishnav_1024/' target="_blank"><FiInstagram/></a>
        </div>
      </div>
      <div className="right">
        <Table></Table>
      </div>
    </div>
  )
}

export default Home