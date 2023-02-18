import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import './Navbar.scss'

import {AiOutlineHome} from 'react-icons/ai'
import {GoLightBulb} from 'react-icons/go'
import {TbMessage} from 'react-icons/tb'
import {HiOutlineDocumentText} from 'react-icons/hi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {ImBlog} from 'react-icons/im'
import {BiBrain} from 'react-icons/bi'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <div className='mobile-view'>
        <Link to="/" className='active'><AiOutlineHome className='nav-icon'/></Link>
        {/* <a href="#skills"><BiBrain className='nav-icon'></BiBrain></a> */}
        <a href="#projects"><AiOutlineFundProjectionScreen className='nav-icon'/></a>
        {/* <Link to="/gallery"><BsBox className='nav-icon'/></Link> */}
        <a href="#contact"><TbMessage className='nav-icon'/></a>
        <a href='https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf'
          target="_blank" ><HiOutlineDocumentText className='nav-icon'/></a>
        <a href="https://vaishnavsh.hashnode.dev/" target='_blank'><ImBlog className='nav-icon'></ImBlog></a>
      </div>

      <div className='desktop-view'>
        <Link to="/" className='home nav-element'>Home</Link>
        {/* <a href="#skills" className='nav-element'>Skills</a> */}
        <a href="#projects" className='nav-element'>Projects</a>
        {/* <Link to="/gallery" className='nav-element'>3D Art</Link> */}
        <a href="#contact" className='nav-element'>Contact</a>
        <a href='https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf'
          target="_blank" className='nav-element'>Resume</a>
        <a href="https://vaishnavsh.hashnode.dev/" target="_blank" className='nav-element'>Blog</a>
      </div>
    </nav>
  )
}

export default Navbar