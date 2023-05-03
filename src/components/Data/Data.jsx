import React from 'react';
import FotoDig from '../FotoDig/FotoDig';
import DatosFotos from '../DatosFotos/DatosFotos';

function Data({ datos }) {
  let datosFt = datos.map((item) => <DatosFotos key={item.id} item={item} />);
  return datosFt;
}

export default Data;
