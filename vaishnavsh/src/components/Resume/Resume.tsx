import React, { useEffect, useState } from 'react'
import './Resume.scss'
import { Document, Page } from 'react-pdf/dist/esm/entry.vite'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const resumeLink = 'https://raw.githubusercontent.com/vaishnav/vaishnavsh/main/vaishnavsh/src/assets/resume.pdf'


const Resume = () => {
  const [width,updateWidth] = useState(window.innerWidth*0.8)

  useEffect(()=>{
    const handleResize = ()=>{
      updateWidth(window.innerWidth*0.8)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <div className='container'>
      <Document file={resumeLink} className='resume-pdf'>
        <Page pageNumber={1} width={width}/>
      </Document>
    </div>
  )
}

export default Resume