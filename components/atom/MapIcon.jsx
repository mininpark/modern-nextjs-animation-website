'use client';

import React, { useState } from 'react';
import './MapIcon.scss';

const MapIcon = ({ id, imgUrl, title }) => {
  const [hover, setHover] = useState();
  const index = [1, 2, 3];

  return (
    <div
      className={`${id} img-container cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <div className="img-hover">
          <p className="title">{title}</p>
          <img src={imgUrl} />
        </div>
      ) : (
        <div className="img-icon">
          <div className="pulse" />
          <img
            src={`/people-0${Math.floor(Math.random() * index.length) + 1}.png`}
            alt="peopleImg"
            className="rotate-45"
          />
        </div>
      )}
    </div>
  );
};

export default MapIcon;
