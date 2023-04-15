import React, { useEffect, useState } from 'react'
import './style.css'
import { getFotoDigital } from '../../services/firebase';
import FotoDigitalData from '../FotoDigitalData/FotoDigitalData';
import Loader from '../Loader/Loader';

function FotoDig() {
  const [Datos, setDatos]= useState([])
  const [loading, isLoading] =useState(true)
  async function leerDatosFotos(){
    let respuesta= await getFotoDigital()
    setDatos(respuesta)
    isLoading(false)
  }
 useEffect(( )=>{
  leerDatosFotos()
 },[])
  return ( <div>
    <div className='contenedor'>{
      loading?
      <Loader/>:
      <FotoDigitalData datos={Datos}/>
    }

{/* <div className='img-container'>
<div className='covers'>
  <h2>Foto Periodismo</h2>
</div>
<img className='img-cont ' src='https://i.imgur.com/bcplBC7.jpg' alt='foto'></img>
</div>
<div className='img-container'>
<div className='covers'>
  <h2>Retratos</h2>
</div>
<img className='img-cont ' src='https://i.imgur.com/pYDWDo8.jpg' alt='foto'></img>
</div>

<div className='lista' >
  <ul>
<li className='items'>
  <a href="#europa" className='link' >Europa</a>
</li>
<li className='items'>
  <a href='#patagonia' className='link'  >Patagonia</a>
</li>
<li className='items'>
  <a href='#estadosunidos' className='link' >Estados unidos</a>
</li>
<li className='items'>
  <a href='#costaargentina' className='link' >Costa Argentina</a>
</li>
<li className='items'>
  <a href='#mendoza' className='link' >Mendoza</a>
</li>
<li className='items'>
  <a href='#sierras' className='link' >Sierras</a>
  
</li>
</ul>
</div>
<div className='lista'>
  <ul>
<li className='items'>
  <a href='#feminismo' className='link' >Feminismo</a>
</li>
<li className='items'>
  <a href="mundial" className='link' >Mundial en Bs As</a>
</li>
<li className='items'>
  <a href='orgullo' className='link' >Orgullo</a>
</li>
<li className='items'>
  <a href='#movilizacionpopular' className='link' >Movilizacion Popular</a>
</li>
<li className='items'>
  <a href='#24demarzo' className='link' >24 de Marzo</a>
</li>
</ul>
</div>
<div className='lista'>
  <ul>
    <li className='items'><a href="#acru" className='link' > ACRU</a></li>
    <li className='items'><a href="#varios" className='link' > Varios</a></li>
  </ul>
</div>

<section id='europa'>
<div> <h2>hola</h2> 
<h2>hola</h2>
<h2>hola</h2>
<h2>hola</h2>
<h2>hola</h2>
<h2>hola</h2>
</div>
</section>
<section id='patagonia'>
<div> <h2>como</h2> 
<h2>como</h2>
<h2>como</h2>
<h2>como</h2>
<h2>como</h2>
<h2>como</h2></div>
</section>
<section id='europa'>
<div> </div>
</section>
<section id='europa'>
  
</section>
<section id='europa'>
  
</section>
<section id='europa'>
  
</section>
<section id='europa'>
  
</section>
<section id='europa'>
  
</section>
<section id='europa'>
  
  </section>
  <section id='europa'>
  
</section>
<section id='europa'>
  
</section> */}
</div>
    </div>
  )
}

export default FotoDig