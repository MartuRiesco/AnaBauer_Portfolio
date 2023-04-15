import React, { useState, useEffect } from 'react'
import { getFotoFija } from '../../services/firebase'
import FotoDigitalData from '../FotoDigitalData/FotoDigitalData'
import Loader from '../Loader/Loader'

function FotoFija() {
  const [Datos, setDatos]= useState([])
  const [loading, isLoading] =useState(true)
  async function leerDatosFotos(){
    let respuesta= await getFotoFija()
    setDatos(respuesta)
    isLoading(false)
  }
 useEffect(( )=>{
  leerDatosFotos()
 },[])
  return (
    <div className='contenedor'>
{
      loading?
      <Loader/>:
      <FotoDigitalData datos={Datos}/>
    }
    {/* <div className='img-container'>
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
    </div> */}
        </div>
  )
}

export default FotoFija