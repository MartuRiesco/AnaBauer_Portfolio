import React from 'react';
import { Link } from 'react-router-dom';
function VideoC({ item }) {
  return (
    <div>
      {' '}
      <Link to={item.category}>
        <div className="img-video">
          <div className="covers-video">
            <h2>{item.title}</h2>
          </div>
          <img className="img-cont-video " src={item.img} alt={item.img}></img>
        </div>
      </Link>
    </div>
  );
}

export default VideoC;
