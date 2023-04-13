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
function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
   <Header/>

   <main>
    <Routes>

<Route path='/' element={<Homepage/>}/>
<Route path='/fotofija' element={<FotoFija/>}/>
<Route path='/fotodigital' element={<DatosFotos/>}/>
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
