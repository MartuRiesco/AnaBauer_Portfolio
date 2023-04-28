import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
         <header>  
        <Link to='/'> <section className='loguito'><h2 className='titulo-pag'>A N A  </h2><h2 className='titulo-pag'>B A U E R </h2> </section></Link>
          <nav>
            <ul className='menu2'>
       <Link to='/fotodigital'>  <li className="menu"> FOTO DIGITAL </li></Link>   
       <Link to='/fotofija'>   <li className="menu">  FOTO 35mm  </li></Link>   
       <Link to='/videos'>  <li className="menu">   VIDEOS  </li></Link>   
       <Link to='/publicaciones'> <li className="menu">  REEL  </li></Link>   
       <Link to='/aboutme'>  <li className="menu">  SOBRE MÍ</li></Link>   
            </ul>
        </nav>
        </header>
  )
}

export default Header