import React from 'react'
import './Heading.scss'


interface HeadingProps {
    header: string;
    info: string;
}


const Heading = (props:HeadingProps) => {
  return (
    <div className='heading'>
        <h1>{props.header}</h1>
        <h4>{props.info}</h4>
    </div>
  )
}

export default Heading