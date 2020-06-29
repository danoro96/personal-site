import React from 'react'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

import * as Me from './daniel.JPG'

export default function HomePage() {
    return (
      <Container className='body'>
  
          <Row className='justify-content-md-center big-font'>
           I'M DANIEL
          </Row>

          <Row className='justify-content-md-center'>
            <img src={Me} alt="Daniel Castillo" />
          </Row>
  
  
          <Row className='justify-content-md-center small-font'>
           a sofware engineer
          </Row>
  
      </Container>
    )
  }