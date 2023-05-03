import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Loader from '../Loader/Loader';
import CategoriasDir from '../CategoriasDir/CategoriasDir';
import { getCategoriaDireccion } from '../../services/firebase';

function CategoriasDireccion() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);
  const params = useParams();
  const idVideos = params.idVideos;

  async function leerDatos() {
    let respuesta = await getCategoriaDireccion(idVideos);
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatos();
  }, [idVideos]);
  return (
    <div>
      <div className="categorias-fotop">
        <div>{loading ? <Loader /> : <CategoriasDir datos={Datos} />}</div>
      </div>
    </div>
  );
}

export default CategoriasDireccion;
