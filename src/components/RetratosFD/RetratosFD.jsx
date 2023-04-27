import React, { useEffect, useState } from 'react'
import { getRetratosFD } from '../../services/firebase';
import Loader from '../Loader/Loader';
import './style.css'
import DatosRetratoFD from '../DatosRetratoFD/DatosRetratoFD';

function RetratosFD() {
    const [Datos, setDatos]= useState([])
    const [loading, isLoading] =useState(true)
  
  async function leerDatos(){
  
      let respuesta = await getRetratosFD();
      setDatos(respuesta)
      isLoading(false)
  }      
  useEffect(()=>{
    leerDatos();
   }, []);
  return (
    <div className='retratosFD'>
    {
         loading?
         <Loader/> :
         <DatosRetratoFD datos={Datos}/>
       }   
</div>
  )
}

export default RetratosFD