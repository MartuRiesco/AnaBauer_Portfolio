import React from 'react'
import { Link } from 'react-router-dom'

function FotoP({item}) {

  return (
    <div>
    <Link to= {item.category}>
  <div className='bloque-fp '>
  <div className='cover-fotoperiodismo'>
      <h2>{item.title}</h2>
    </div>
    <img  className='imagen-cover' src={item.img} alt={item.description}></img>
    
    </div>
    </Link>
   

  </div>
  )
}

export default FotoP