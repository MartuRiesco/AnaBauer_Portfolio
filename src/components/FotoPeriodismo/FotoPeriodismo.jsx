import { useState, useEffect } from 'react';
import React from 'react';
import './styles.css';
import { getFotoPeriodismo } from '../../services/firebase';
import Loader from '../Loader/Loader';
import Data from '../Data/Data';
import FotoPCat from '../FotoPCat/FotoPCat';

function FotoPeriodismo() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);

  async function leerDatos() {
    let respuesta = await getFotoPeriodismo();
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatos();
  }, []);
  return (
    <div className="fotoperiodismo">
      {loading ? <Loader /> : <FotoPCat datos={Datos}></FotoPCat>}
    </div>
  );
}

export default FotoPeriodismo;
