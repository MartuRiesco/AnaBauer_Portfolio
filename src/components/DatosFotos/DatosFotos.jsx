import React from 'react';
import { Link } from 'react-router-dom';
function DatosFotos({ item }) {
  return (
    <div>
      <Link to={item.category}>
        <div className="bloque">
          <div className="cover ">
            <h2>{item.title}</h2>
          </div>
          <img
            className="imagen-cover"
            src={item.img}
            alt={item.description}
          ></img>
        </div>
      </Link>
    </div>
  );
}

export default DatosFotos;
