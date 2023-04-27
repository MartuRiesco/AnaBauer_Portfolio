import React, { useEffect, useState } from 'react'
import './style.css'
import { getDiariodeViaje } from '../../services/firebase';
import Loader from '../Loader/Loader';
import FotoPCat from '../FotoPCat/FotoPCat';
import DatosDiarioV from '../DatosDiarioV/DatosDiarioV';

function DiarioDeViaje() {
  const [Datos, setDatos]= useState([])
  const [loading, isLoading] =useState(true)

async function leerDatos(){

    let respuesta = await getDiariodeViaje();
    setDatos(respuesta)
    isLoading(false)
}      
useEffect(()=>{
  leerDatos();
 }, []);
  return (
    <div className='diariodeviaje'>
     {
          loading?
          <Loader/> :
          <DatosDiarioV datos={Datos}/>
        }   
 </div>
  )
}

export default DiarioDeViaje