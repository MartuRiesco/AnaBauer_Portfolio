import React from 'react';
import DatoRFD from '../DatoRFD/DatoRFD';

function DatosRetratoFD({ datos }) {
  let datosFt = datos.map((item) => <DatoRFD key={item.id} item={item} />);
  return datosFt;
}

export default DatosRetratoFD;
