import React from 'react'
import VideoC from '../VideoC/VideoC'

function VideosCategorias({datos}) {
    let datosFotos =datos.map((item)=>< VideoC item={item}/>)
  return (
    datosFotos
  )
}

export default VideosCategorias