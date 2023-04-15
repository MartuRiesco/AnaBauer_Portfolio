import React from 'react'
import './style.css'
import {BsInstagram} from 'react-icons/bs'
 import {GoMail} from 'react-icons/go'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
       <Link to='/'> <h2 className='titulo-pag'>Ana Bauer</h2></Link>
     <BsInstagram className='icon'/>
<GoMail className='icon'/>
    </div>
  )
}

export default Footer