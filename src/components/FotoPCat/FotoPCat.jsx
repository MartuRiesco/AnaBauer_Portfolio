import React from 'react'
import FotoP from '../FotoP/FotoP'

function FotoPCat({datos}) {
    let datosFt = datos.map((item)=> <FotoP  key={item.id} item={item} />)
    return (
  datosFt
  )
}

export default FotoPCat