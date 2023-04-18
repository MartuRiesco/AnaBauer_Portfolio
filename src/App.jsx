import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import FotoFija from './components/FotoFija/FotoFija'
import FotoDig from './components/FotoDig/FotoDig'
import AboutMe from './components/AboutMe/AboutMe'
import Publicaciones from './components/Publicaciones/Publicaciones'
import Videos from './components/Videos/Videos'
import Footer from './components/Footer/Footer'
import DatosFotos from './components/DatosFotos/DatosFotos'
import FotoListContainer from './components/FotoListContainer/FotoListContainer'
import FotoPeriodismo from './components/FotoPeriodismo/FotoPeriodismo'
import CategoriaFotop from './components/CategoriaFotop/CategoriaFotop'
function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
   <Header/>

   <main>
    <Routes>

<Route path='/' element={<FotoListContainer/>}/>
<Route path='/fotofija' element={<FotoFija/>}/>
<Route path='/fotodigital/fotoperiodismo' element={<FotoPeriodismo/>}/>
<Route path='fotodigital/fotoperiodismo/:idCategory' element={<CategoriaFotop/>}/>
<Route path='/fotodigital' element={<FotoDig/>}/>
<Route path='/aboutme' element={<AboutMe/>}/>
<Route path='/publicaciones' element={<Publicaciones/>}/>
<Route path='/videos' element={<Videos/>}/>
    </Routes>
   </main>
  <Footer></Footer>
    </div>
    </BrowserRouter>
  )
}

export default App
