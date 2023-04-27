import React from 'react'

function CatD({item}) {
    return (
       <div>
       <div className='div-categorias' >
        <h1 className='titulodireccion'>{item.title}</h1>
       <iframe  className='iframe'src={item.iframe} frameborder="0"></iframe>
       </div>
       <div className='equipo'>
        <h2>Equipo:</h2>
        <div className='equipo-al'>
        <h3>Direccion: Ana Bauer</h3>
        <h4>Asistente de Direccion: {item.asistdirec}</h4>
        <h4>Direccion de Fotografía: {item.direcfoto}</h4>
        <h4>Direccion de Arte: {item.direcarte}</h4>
        <h4>Sonido: {item.sonido}</h4>
        <h4>Producción: {item.produccion}</h4>
        <h4>Asistente de Producción:{item.asistproduc} </h4>
        <h4>Maquillaje y peinado: {item.maq}</h4>
        <h4>Guión: {item.guion}</h4>
        <h4>Montaje: {item.montaje}</h4>
        <h4>Grafica:{item.grafica}</h4>
        <h3>Actores:</h3> 
        <h4>{item.act1}: {item.act1nom}</h4>
        <h4>{item.act2}: {item.act2nom}</h4>
        </div>
        </div>
        </div>
      )
}

export default CatD