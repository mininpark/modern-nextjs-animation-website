import React from 'react';

const Features = ({ text, title, subtitle, imgUrl, flexStyle, index }) => {
  console.log(text);
  return (
    <div className={`${flexStyle} text-white items-center mt-[30px]`}>
      <div className="w-[70px] min-w-[70px] h-[70px] mr-[30px] backdrop-blur-xl bg-[#323f5d] rounded-[24px] justify-center flex items-center">
        {imgUrl ? (
          <img src={imgUrl} alt={imgUrl + index} />
        ) : (
          <div>{index + 1}</div>
        )}
      </div>
      {title && <p className="font-extrabold leading-8 my-3">{title}</p>}
      {subtitle ? (
        <p className="sm:max-w-[300px] w-full">{subtitle}</p>
      ) : (
        <p className="sm:max-w-[300px] break-words w-full">{text}</p>
      )}
    </div>
  );
};

export default Features;
