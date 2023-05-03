import React from 'react';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import { getCategory } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import DataFotoP from '../DataFotoP/DataFotoP';
import './style.css';
function CategoriaFotop() {
  const [Datos, setDatos] = useState([]);
  const [loading, isLoading] = useState(true);
  const params = useParams();
  const idCategory = params.idCategory;

  async function leerDatos() {
    let respuesta = await getCategory(idCategory);
    setDatos(respuesta);
    isLoading(false);
  }
  useEffect(() => {
    leerDatos();
  }, []);
  console.log(idCategory);
  return (
    <div>
      <div className="categorias-fotop">
        <div className="fotosp">
          {loading ? <Loader /> : <DataFotoP datos={Datos} />}
        </div>
      </div>
    </div>
  );
}

export default CategoriaFotop;
