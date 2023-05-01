import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
    return (
         <Navbar  expand="">
           {/*   <Navbar.Toggle className="hamburguer-menu" /> */}
             <Container>
               <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="me-auto">
                 <Nav.Link  className="menu" href='/fotodigital'>  FOTO DIGITAL</Nav.Link>
                 <Nav.Link className="menu" href='/fotofija'>  FOTO 35mm</Nav.Link>  
                 <Nav.Link className="menu" href='/videos'>  VIDEOS </Nav.Link>
                 <Nav.Link className="menu" href='/publicaciones'>  REEL</Nav.Link>
                 <Nav.Link className="menu" href='/aboutme'>  SOBRE MÍ</Nav.Link>
                 </Nav>
               </Navbar.Collapse>
              
             </Container>
           </Navbar>
      
    );
}





export default Menu