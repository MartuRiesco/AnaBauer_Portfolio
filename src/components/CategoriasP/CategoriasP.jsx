import React from 'react'

function CategoriasP({item}) {
    return (
        <div className={item.description}> 
       
        <img className='img-per ' src={item.img} alt={item.img} ></img>
        
        </div>
      )
}

export default CategoriasP