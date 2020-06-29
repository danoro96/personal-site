import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { useHistory } from 'react-router'

export default  function Header() {

    const history = useHistory()
  
    function route(event) {
      
      history.push(event ? event.target.innerHTML.toLowerCase() : 'home')
    }
  
    return (
  
      <Row>
  
        <Col className='logo' onClick={e => route()}>
          DACO
        </Col>
  
        <Col className='header-right'>
          <Row> 
            <Col className='header-options' onClick={e => route(e)}>
              Home
            </Col>
  
            <Col className='header-options'  onClick={e => route(e)}>
              About
            </Col>
  
            <Col className='header-options' onClick={e => route(e)}>
              Contact
            </Col>
          </Row>
        </Col>
        </Row>
    )
  }