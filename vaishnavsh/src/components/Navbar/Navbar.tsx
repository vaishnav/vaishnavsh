import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

import {AiOutlineHome} from 'react-icons/ai'
import {GoLightBulb} from 'react-icons/go'
import {TbMessage} from 'react-icons/tb'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className='mobile-view'>
        <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='nav-icon'/></Link>
        <Link to="/project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineFundProjectionScreen className='nav-icon'/></Link>
        {/* <Link to="/gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}><BsBox className='nav-icon'/></Link> */}
        <Link to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage className='nav-icon'/></Link>
        <Link to="/resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><HiOutlineDocumentText className='nav-icon'/></Link>
      </div>

      <div className='desktop-view'>
        <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'nav-element home active' : 'home nav-element'}>Home</Link>
        <Link to="/project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'nav-element active' : 'nav-element'}>Project</Link>
        {/* <Link to="/gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'nav-element active' : 'nav-element'}>3D Art</Link> */}
        <Link to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav-element active' : 'nav-element'}>Contact</Link>
        <Link to="/resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'nav-element active' : 'nav-element'}>Resume</Link>
      </div>
    </nav>
  )
}

export default Navbar