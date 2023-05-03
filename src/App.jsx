import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import FotoFija from './components/FotoFija/FotoFija';
import FotoDig from './components/FotoDig/FotoDig';
import AboutMe from './components/AboutMe/AboutMe';
import Publicaciones from './components/Publicaciones/Publicaciones';
import Videos from './components/Videos/Videos';
import Footer from './components/Footer/Footer';
import DatosFotos from './components/DatosFotos/DatosFotos';
import FotoListContainer from './components/FotoListContainer/FotoListContainer';
import FotoPeriodismo from './components/FotoPeriodismo/FotoPeriodismo';
import CategoriaFotop from './components/CategoriaFotop/CategoriaFotop';
import DiarioDeViaje from './components/DiarioDeViaje/DiarioDeViaje';
import RetratosFD from './components/RetratosFD/RetratosFD';
import Direccion from './components/Direccion/Direccion';
import CategoriasDireccion from './components/CategoriasDireccion/CategoriasDireccion';
function App() {
  document.oncontextmenu = function () {
    return false;
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<FotoListContainer />} />
            <Route path="/fotofija" element={<FotoFija />} />
            <Route path="/fotodigital" element={<FotoDig />} />
            <Route
              path="/fotodigital/fotoperiodismo"
              element={<FotoPeriodismo />}
            />
            <Route path="/fotodigital/retratos" element={<RetratosFD />} />
            <Route
              path="/fotodigital/diariodeviaje"
              element={<DiarioDeViaje />}
            />
            <Route
              path="fotodigital/diariodeviaje/:idCategory"
              element={<CategoriaFotop />}
            />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/publicaciones" element={<Publicaciones />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/videos/direccion" element={<Direccion />} />
            <Route
              path="/videos/direccion/:idVideos"
              element={<CategoriasDireccion />}
            />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
