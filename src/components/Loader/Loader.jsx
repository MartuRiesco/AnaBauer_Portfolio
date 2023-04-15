import React from 'react'
import './style.css'
import { MrMiyagi } from '@uiball/loaders'
function Loader() {
  return (
    <div className='loader'>
<div className='loader-logo'>
    <MrMiyagi 
     size={500}
     lineWeight={3.5}
     speed={1} 
     color="white" 
    />
    </div></div>
  )
}

export default Loader