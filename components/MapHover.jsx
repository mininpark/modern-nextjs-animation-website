import React from 'react';

const MapHover = ({ peopleImgIndex }) => (
  <div className="">
    <div className="">
      <img src={`/people-0${peopleImgIndex}.png`} alt="peopleImg" />
      <div className="w-0 h-0 absolute border-l-[20px] border-l-transparent border-t-[40px] border-t-[#323f5d] border-r-[20px] border-r-transparent bottom-[-20px] left-[18px]  " />
    </div>
  </div>
);

export default MapHover;
