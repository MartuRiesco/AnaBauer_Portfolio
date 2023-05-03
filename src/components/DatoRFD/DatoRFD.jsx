import React from 'react';
import { Link } from 'react-router-dom';

function DatoRFD({ item }) {
  return (
    <div>
      <Link to={item.category}>
        <div className=" bloque-rd">
          <div className="cover-fotoperiodismo">
            <h2>{item.title}</h2>
          </div>
          <img
            className="imagen-cover-rd"
            src={item.img}
            alt={item.description}
          ></img>
        </div>
      </Link>
    </div>
  );
}

export default DatoRFD;
