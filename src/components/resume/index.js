import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../animatedLetters'
import Loader from 'react-loaders'

import Card from 'react-bootstrap/Card'

import LogoC from '../../assets/images/logoC.png'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills and Resume'.split('')}
              idx={15}
            />
          </h1>
          
          <div className='d-flex '>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          <Card className='p-2 flex-fill'>
            <Card.Header as="h5">Angular</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
            </Card.Body>
            
          </Card>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Resume
