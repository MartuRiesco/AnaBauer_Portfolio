import React from 'react'
import FotoDig from '../FotoDig/FotoDig'

function Data({Datos}) {
  return (
    Datos.map((datos)>= <FotoDig key={datos.id} dato={datos}/>)

  )
}

export default Data