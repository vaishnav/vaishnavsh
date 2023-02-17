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
        <Link to="/" className='active'><AiOutlineHome className='nav-icon'/></Link>
        {/* <Link to="/project"><AiOutlineFundProjectionScreen className='nav-icon'/></Link> */}
        {/* <Link to="/gallery"><BsBox className='nav-icon'/></Link> */}
        {/* <Link to="/contact"><TbMessage className='nav-icon'/></Link> */}
        <Link to="/resume"><HiOutlineDocumentText className='nav-icon'/></Link>
      </div>

      <div className='desktop-view'>
        <Link to="/" className='home nav-element'>Home</Link>
        {/* <Link to="/project" className='nav-element'>Projects</Link> */}
        {/* <Link to="/gallery" className='nav-element'>3D Art</Link> */}
        {/* <Link to="/contact" className='nav-element'>Contact</Link> */}
        <Link to="/resume" className='nav-element'>Resume</Link>
      </div>
    </nav>
  )
}

export default Navbar