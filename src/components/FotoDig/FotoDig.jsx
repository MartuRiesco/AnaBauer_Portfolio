import React, { useEffect, useState } from 'react'
import './style.css'
import { getFotoDigital } from '../../services/firebase';
import FotoDigitalData from '../FotoDigitalData/FotoDigitalData';
import Loader from '../Loader/Loader';

function FotoDig() {
  const [Datos, setDatos]= useState([])
  const [loading, isLoading] =useState(true)
  async function leerDatosFotos(){
    let respuesta= await getFotoDigital()
    setDatos(respuesta)
    isLoading(false)
  }
 useEffect(( )=>{
  leerDatosFotos()
 },[])
  return ( <div>
    <div className='contenedor'>{
      loading?
      <Loader/>:
      <FotoDigitalData datos={Datos}/>
    }
</div>
    </div>
  )
}

export default FotoDig