import React from 'react'

import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

export default function About() {

  return (

    <Container style={{ padding: '1em'}}>

        <Row className='big-font'>
            Background
        </Row>

        <Row className='justify-content-sm-center small-font'>
            <Col xs lg="5">
                <Card > 
                    <Card.Body>
                        <Card.Text>
                        I am a sofware engineer with a passion for designing cool web-apps, 
                        efficient backends and awesome data visualizations
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className='big-font'>
        Projects
        </Row>

        <Row>
            <Col>
                <Card> 
                    <Card.Body>
                        <Card.Title> Cyber Workspace </Card.Title>
                        <Card.Text>
                            Used Vue and Quasar to help build an application that increased work efficiency for the company
                        </Card.Text>
                        <Card.Text>
                            Internal project, contact me for details.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card> 
                    <Card.Body>
                        <Card.Title> Space AI </Card.Title>
                            <Card.Text>
                                Used HTML, CSS, jQuery and three.js to create a tool 
                                that allows analysts to make descicions about what manuevers they should perform.
                            </Card.Text>
                            <Card.Text>
                                Internal project, contact me for details.
                            </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card> 
                    <Card.Body>
                        <Card.Title> Mitigator </Card.Title>
                        <Card.Text>
                            Used React and Bootstrap to create a web application that will allow 
                            analysts to see where the greatest security threats exist. Also used d3 to 
                            create visualizaitons for the threats.
                        </Card.Text>
                        <Card.Text>
                            Internal project, contact me for details.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      
    </Container>
  )
}