import React, { useEffect, useState } from 'react';
import { getVideos } from '../../services/firebase';
import FotoDigitalData from '../FotoDigitalData/FotoDigitalData';
import Loader from '../Loader/Loader';
import VideosCategorias from '../VideosCategorias/VideosCategorias';
import './style.css';
function Videos() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);
  async function leerDatosVideos() {
    let respuesta = await getVideos();
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatosVideos();
  }, []);
  return (
    <div>
      <div className="contenedor-videos">
        {loading ? <Loader /> : <VideosCategorias datos={Datos} />}
      </div>
    </div>
  );
}

export default Videos;
