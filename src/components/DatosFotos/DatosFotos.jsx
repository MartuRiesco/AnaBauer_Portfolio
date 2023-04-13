import React from 'react'
import { useState, useEffect } from 'react'
import { getItems } from '../../services/firebase'
import FotoDig from '../FotoDig/FotoDig';
import Data from '../Data/Data';

function DatosFotos() {
    const [datos, setDatos]= useState([])
    async function LeerDatos(){
      let respuesta = await getItems();
      setDatos(respuesta)
      
    }
    useEffect(()=>{
      LeerDatos();
     }, []);
   
  return (
    <div>
     <Data Datos={datos}/>
    </div>
  )
}

export default DatosFotos