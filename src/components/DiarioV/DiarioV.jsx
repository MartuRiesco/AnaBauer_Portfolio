import React from 'react'
import { Link } from 'react-router-dom'

function DiarioV({item}) {

  return (
    <div>
    <Link to= {item.category}>
  <div className='bloque-fp'>
  <div className='cover-diariodeviaje'>
      <h2>{item.title}</h2>
    </div>
    <img  className='imagen-cover' src={item.img} alt={item.description}></img>
    
    </div>
    </Link>
  </div>
  )
}

export default DiarioV