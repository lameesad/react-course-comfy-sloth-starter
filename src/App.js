import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import styled from 'styled-components'

const Button = styled.button`
background:green;
color:white;
`
const Container = styled.div`
background:red;
color:white;
font-size:2rem;
.hero{
  font-size:8rem;
}
`
const Container2 = styled.div`
background:red;
color:white;
font-size:2rem;
.hero{
  font-size:1rem;
}
`



function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Button>Click me</Button>
      <Container>
        <div>
          <h3>hello world</h3>
          <div className="hero">
            hero text
          </div>
        </div>
      </Container>

      <Container2>
        <div>
          <h3>hello world</h3>
          <div className="hero">
            hero text
          </div>
        </div>
      </Container2>
    </div>
  )
}

export default App
