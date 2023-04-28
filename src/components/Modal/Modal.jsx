import React from 'react'
import './style.css'
import {IoMdClose} from 'react-icons/io'
function Modal({children, estado, cambiarEstado}) {
  return (<>
  {estado &&
    <div className='modal-bk'>
        <div className='modal-cont'>
        <IoMdClose onClick={()=> cambiarEstado(false)} className='boton-modal'> X</IoMdClose>
        {children}
        </div>
        
    </div>}
    </>
  )
}

export default Modal