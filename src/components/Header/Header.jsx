import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
         <header>  
        <Link to='/'> <img src="https://i.imgur.com/YMHASwY.png" alt="logo" className='logo' /></Link>
          <nav>
            <ul className='menu2'>
       <Link to='/fotodigital'>  <li className="menu">Fotografía Digital</li></Link>   
       <Link to='/fotofija'>   <li className="menu">Fotografía 35mm</li></Link>   
       <Link to='/videos'>  <li className="menu"> Videos </li></Link>   
       <Link to='/publicaciones'> <li className="menu">Publicaciones</li></Link>   
       <Link to='/aboutme'>  <li className="menu">About me</li></Link>   
            </ul>
        </nav>
        </header>
  )
}

export default Header