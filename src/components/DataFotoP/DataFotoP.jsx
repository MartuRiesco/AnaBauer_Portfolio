import React from 'react';
import CategoriasP from '../CategoriasP/CategoriasP';

function DataFotoP({ datos }) {
  let datosFt = datos.map((item) => <CategoriasP key={item.id} item={item} />);
  return datosFt;
}

export default DataFotoP;
