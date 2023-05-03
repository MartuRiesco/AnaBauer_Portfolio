import React from 'react';
import FotoD from '../FotoD/FotoD';

function FotoDigitalData({ datos }) {
  let datosFotos = datos.map((item) => <FotoD item={item} />);
  return datosFotos;
}

export default FotoDigitalData;
