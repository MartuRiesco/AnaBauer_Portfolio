import { getDireccion } from '../../services/firebase';
import DatosRetratoFD from '../DatosRetratoFD/DatosRetratoFD';
import Loader from '../Loader/Loader';
import './style.css'
 import React, { useEffect, useState } from 'react'
 
 function Direccion() {
    const [Datos, setDatos]= useState([])
    const [loading, isLoading] =useState(true)
  
  async function leerDatos(){
  
      let respuesta = await getDireccion();
      setDatos(respuesta)
      isLoading(false)
  }      
  useEffect(()=>{
    leerDatos();
   }, []);
    return (
      <div className='direccion'>
       {
            loading?
            <Loader/> :
            <DatosRetratoFD datos={Datos}/>
          }   
   </div>
    )
  }
  
  export default Direccion