import React from 'react'
import CatD from '../CatD/CatD'


    function CategoriasDir({datos}) {
        let datosFt = datos.map((item)=> <CatD key={item.id} item={item} />)
        return (
      datosFt
      )
        }
      
      export default CategoriasDir