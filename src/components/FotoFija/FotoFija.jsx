import React, { useState, useEffect } from 'react';
import { getFotoFija } from '../../services/firebase';
import FotoDigitalData from '../FotoDigitalData/FotoDigitalData';
import Loader from '../Loader/Loader';

function FotoFija() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);
  async function leerDatosFotos() {
    let respuesta = await getFotoFija();
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatosFotos();
  }, []);
  return (
    <div className="contenedor">
      {loading ? <Loader /> : <FotoDigitalData datos={Datos} />}
    </div>
  );
}

export default FotoFija;
