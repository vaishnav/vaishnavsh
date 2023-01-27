import React from 'react'
import { Link } from "react-router-dom";
import './Home.scss'
import Table from '../Table/Table'
import Contact from '../Contact/Contact';

import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaArtstation } from 'react-icons/fa'


const Home = () => {
  return (
    <>
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
          <div className="header-quick-nav">
            <a className="quick-nav-item" href='mailto:vaishnav291999@gmail.com'><FiMail/></a>
            <a className="quick-nav-item" href='https://www.linkedin.com/in/vaishnav-sharma-1952681a3/' target="_blank"><FiLinkedin/></a>
            <a className="quick-nav-item" href='https://github.com/vaishnav' target="_blank"><FiGithub/></a>
            <a className="quick-nav-item" href='https://ue837ee2a.artstation.com/' target="_blank"><FaArtstation/></a>
            <a className="quick-nav-item" href='https://www.instagram.com/vaishnav_1024/' target="_blank"><FiInstagram/></a>
          </div>
          {/* <Link to="/contact" className='default-button'>Contact</Link> */}
        </div>
        <div className="right">
          <Table></Table>
        </div>
      </div>
      <div className="container mid-section">
        <h1>
          I am a Technology Enthusiast and like to work on real world projects. I've built things in the fields of web developemnt and 3D art. 
        </h1>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </>
  )
}

export default Home