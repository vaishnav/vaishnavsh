import React from 'react'
import './Home.scss'
import Table from '../Table/Table'

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
      </div>
      <div className="right">
        <Table></Table>
      </div>
    </div>
  )
}

export default Home