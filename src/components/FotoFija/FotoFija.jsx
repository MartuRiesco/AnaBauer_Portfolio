import React from 'react'

function FotoFija() {
  return (
    <div className='contenedor'>
    <div className='img-container'>
    <div className='covers'>
      <h2>Retratos</h2>
    </div>
    <img className='img-cont ' src='https://i.imgur.com/pY4MTXq.jpg' alt='foto'></img>
    </div>
    <div className='img-container'>
    <div className='covers'>
      <h2>Exterior</h2>
    </div>
    <img className='img-cont ' src='https://i.imgur.com/bcplBC7.jpg' alt='foto'></img>
    </div>
    <div className='img-container'>
    <div className='covers'>
      <h2>Interior</h2>
    </div>
    <img className='img-cont ' src='https://i.imgur.com/pYDWDo8.jpg' alt='foto'></img>
    </div>
        </div>
  )
}

export default FotoFija