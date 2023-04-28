import React from 'react'

function CatD({item}) {
    return (
       <div>
       <div className='div-categorias' >
        <h1 className='titulodireccion'>{item.title}</h1>
       <iframe  className='iframe'src={item.iframe} frameborder="0"></iframe>
       </div>
        </div>
      )
}

export default CatD