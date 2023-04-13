import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

function Homepage() {
  
  return (

<div>
<div className="project-coverses">
<Link to='/fotodigital'>
<div className='bloque'>
<div className='cover'>
    <h2>Fotografia digital</h2>
  </div>
  <img  className='imagen-cover' src='https://i.imgur.com/G2dUvde.jpg' alt='fprp'></img>
  
  </div></Link>
  <Link to='fotofija'><div className='bloque'>
<div className='cover'>
    <h2>Fotografia 35mm </h2>
  </div>
  <img  className='imagen-cover' src='https://i.imgur.com/4HeKccU.jpg' alt='foto'></img>

  </div></Link>
  <Link to='videos'><div className='bloque'>
<div className='cover'>
    <h2>Videos</h2>
  </div>
  <img  className='imagen-cover' src='https://i.imgur.com/G2dUvde.jpg' alt='frfp'></img>
  </div></Link>
  <Link to='publicaciones'><div className='bloque'>
<div className='cover'>
    <h2>Publicaciones</h2>
  </div>
  <img className='imagen-cover'  src='https://i.imgur.com/4HeKccU.jpg' alt='foto'></img></div>
</Link>
           </div>
        </div>
         
  )
}

export default Homepage

  {/* <figure className='cover-image'>
     <img src="https://i.imgur.com/YMHASwY.png" alt="fotodig"  className='cover-img video'/>
       <section className='sector'>
            <p>Fotografía Digital</p>
            </section>
     <img src="https://i.imgur.com/YMHASwY.png" alt="fotodig"  className='cover-img video'/>
     <section className='sector'>
            <p>Fotografía Digital</p>
            </section>
     </figure> 
     <figure className='cover-image'>
     <img src="https://i.imgur.com/YMHASwY.png" alt="fotodig"  className='cover-img video'/>
     <section className='sector'>
            <p>Fotografía Digital</p>
            </section>
     <img src="https://i.imgur.com/YMHASwY.png" alt="fotodig"  className='cover-img video'/>
     <section className='sector'>
            <p>Fotografía Digital</p>
            </section>
     </figure> */}