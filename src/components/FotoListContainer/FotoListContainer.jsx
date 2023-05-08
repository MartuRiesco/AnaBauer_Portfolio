import React from 'react';
import Data from '../Data/Data';
import './styles.css'
import { getItems } from '../../services/firebase';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';

function FotoListContainer() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);

  async function leerDatos() {
    let respuesta = await getItems();
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatos();
  }, []);
  return (
    <div>
      <div className="project-coverses">
        {loading ? <Loader /> : <Data datos={Datos}></Data>}
      </div>
    </div>
  );
}

export default FotoListContainer;
