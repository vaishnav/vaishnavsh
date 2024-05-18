import React from 'react'
import { Link } from "react-router-dom";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { Object3D, BufferGeometry, Mesh } from 'three';

import './Home.scss'
import Table from '../Table/Table'
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import { FiMail } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaArtstation } from 'react-icons/fa'

function getGeometry(object: Object3D<THREE.Event>): BufferGeometry | undefined {
  return object instanceof Mesh ? object.geometry  as BufferGeometry: undefined;
}

// function getGeometry is designed to check if a given object is an instance of the Mesh class from the Three.js library.
// If the object is indeed a Mesh, the function returns its geometry as a BufferGeometry type. 
// If the object is not a Mesh, the function returns undefined.

const Model = () => {
  // Need to create this function as useTexture cannot be used outside the cavas component and will throw error like 
  // Hooks can only be used within the Canvas component!
  const { nodes } = useGLTF('src/assets/Desk.glb')
  // console.log(nodes);
  const bakedTexture = useTexture('src/assets/BakedB.jpg')
  return (
    <>
      <mesh geometry={getGeometry(nodes.Desk)} position={[0.9, 0.34, -1.47]} rotation={[0, 0.14, 0]}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </mesh>
    </>
  )
}

const Home = () => {
  return (
    <>
      <div className="header">
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
          <Canvas>
            <pointLight position={[10, 10, 10]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
      {/* <Skills></Skills> */}
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default Home