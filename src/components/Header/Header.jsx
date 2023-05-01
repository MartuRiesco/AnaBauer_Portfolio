import React from 'react'
import './style.css'

import { Link } from 'react-router-dom'
import Menu from '../Navbar/Navbar'
function Header() {
  return (
         <header>  
        <Link to='/'> <section className='loguito'><h2 className='titulo-pag'>A N A  </h2><h2 className='titulo-pag'>B A U E R </h2> </section></Link>
          <div className='menu2'>
         {/*  <Navbar expand="lg">
          <Container>
         
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        <Nav.Link className="menu" href='/fotodigital'>  FOTO DIGITAL</Nav.Link>
  <Nav.Link className="menu" href='/fotofija'>  FOTO 35mm</Nav.Link>  
  <Nav.Link className="menu" href='/videos'>  VIDEOS </Nav.Link>
            <Nav.Link className="menu" href='/publicaciones'>  REEL</Nav.Link>
              <Nav.Link className="menu" href='/aboutme'>  SOBRE MÍ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar> */}
   <Menu/>

         </div>
      
        </header>
  )
}

export default Header