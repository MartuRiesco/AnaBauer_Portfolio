import React from 'react';
import DiarioV from '../DiarioV/DiarioV';

function DatosDiarioV({ datos }) {
  let datosFt = datos.map((item) => <DiarioV key={item.id} item={item} />);
  return datosFt;
}

export default DatosDiarioV;
