import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
      <Container>
          <Navbar.Brand href="#home">
          
          <Link to={'/'} style={{textDecoration:'none',fontSize:'30px', color:'white'}}><i class="fa-solid fa-video fa-beat text-warning me-3"></i>{' '}
                  Video Player</Link>
          </Navbar.Brand>
          
      </Container>
      <hr />
    </>
    
  )
}

export default Header