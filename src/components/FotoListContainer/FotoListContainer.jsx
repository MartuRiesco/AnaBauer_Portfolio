import React from 'react'
import Data from '../Data/Data'
import { getItems, getCategory } from '../../services/firebase'
import { useEffect, useParams, useState } from 'react'
import Loader from '../Loader/Loader'


function FotoListContainer() {
    const [Datos, setDatos]= useState([])
    const [loading, isLoading] =useState(true)
/*   const params = useParams()
  const idCategoria = params.idCategoria; */
  async function leerDatos(){
   /*  if (idCategoria === undefined){ */
      let respuesta = await getItems ();
      setDatos(respuesta)
      isLoading(false)
 /*  }else{
      let respuesta =  await getCategory(idCategoria);
      setDatos(respuesta)
  } */
}      
  useEffect(()=>{
    leerDatos();
   }, [/* idCategoria */]);
  return (
    <div>
      <div className="project-coverses">
        {
          loading?
          <Loader/> :
          <Data datos={Datos}></Data>
        }
      
       </div>
    </div>
  )
}

export default FotoListContainer