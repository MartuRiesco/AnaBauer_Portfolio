import React from 'react';
import { Link } from 'react-router-dom';
function FotoD({ item }) {
  return (
    <div>
      {' '}
      <Link to={item.category}>
        <div className="img-container">
          <div className="covers">
            <h2>{item.title}</h2>
          </div>
          <img className="img-cont " src={item.img} alt={item.img}></img>
        </div>
      </Link>
    </div>
  );
}

export default FotoD;
