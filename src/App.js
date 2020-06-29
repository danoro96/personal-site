import React from 'react'
import './App.css'

import Container from 'react-bootstrap/Container'

import Header from './header.component'
// import Footer from './footer.component'
import HomePage from './homepage.component'

import { Route } from 'react-router-dom'

import About from './about.component'

import Contact from './contact.component'

function App() {

  return (
      
      <Container>

        <div id='back' />

        <Header />

        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        
      </Container>

  )
}

export default App
