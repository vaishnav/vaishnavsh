import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {GoLightBulb} from 'react-icons/go'
import {BiBook} from 'react-icons/bi'
import {TbMessage} from 'react-icons/tb'
import {GrDocumentUser} from 'react-icons/gr'
import {GrGallery} from 'react-icons/gr'
import {BsBox} from 'react-icons/bs'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className='mobile-view'>
        <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome className='nav-icon'/></Link>
        <Link to="/project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><GoLightBulb className='nav-icon'/></Link>
        <Link to="/gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}><BsBox className='nav-icon'/></Link>
        <Link to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessage className='nav-icon'/></Link>
        <Link to="/resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><GrDocumentUser className='nav-icon'/></Link>
      </div>

      <div className='desktop-view'>
        <Link to="/" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</Link>
        <Link to="/project" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>Project</Link>
        <Link to="/gallery" onClick={() => setActiveNav('#gallery')} className={activeNav === '#gallery' ? 'active' : ''}>3D Art</Link>
        <Link to="/contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</Link>
        <Link to="/resume" onClick={() => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}>Resume</Link>
      </div>
    </nav>
  )
}

export default Navbar