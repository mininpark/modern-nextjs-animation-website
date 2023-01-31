'use client';

import React, { useState } from 'react';
import './MapIcon.css';

const MapIcon = ({ peopleImgIndex, id, imgUrl, title }) => {
  const [hover, setHover] = useState();

  return (
    <div
      className="img-container cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <div className="w-[200px] h-[100px]">
          <div>{id}</div>
          <img src={imgUrl} />
        </div>
      ) : (
        <div className="img-icon">
          <div className="pulse" />
          <img
            src={`/people-0${peopleImgIndex}.png`}
            alt="peopleImg"
            className="rotate-45"
          />
        </div>
      )}
    </div>
  );
};

export default MapIcon;
