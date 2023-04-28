import React, { useState } from 'react'
import Modal from '../Modal/Modal'

function CategoriasP({item}) {
  const [modal, estadoModal] =useState(false)
    return (
       
       <div className= {item.description}>
        <img className='img-per' src={item.img} alt={item.img}  onClick={()=> estadoModal(!modal)}></img>
        <Modal estado={modal} cambiarEstado={estadoModal}>
          
          <img className='img-modal' src={item.img}></img>
        </Modal>
        </div>
      )
}

export default CategoriasP