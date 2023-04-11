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
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App">
   <Header/>

   <main>
    <Routes>

<Route path='/' element={<Homepage/>}/>
<Route path='/fotofija' element={<FotoFija/>}/>
<Route path='/fotodigital' element={<FotoDig/>}/>
<Route path='/aboutme' element={<AboutMe/>}/>
<Route path='/publicaciones' element={<Publicaciones/>}/>
<Route path='/videos' element={<Videos/>}/>
    </Routes>
   </main>
  
    </div>
    </BrowserRouter>
  )
}

export default App
