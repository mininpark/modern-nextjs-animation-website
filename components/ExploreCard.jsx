'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styles from '../styles';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  const imgRef = useRef(null);

  // useEffect(() => {
  //   const imgEl = imgRef.current;
  //   const animation = gsap.timeline({ paused: true });

  //   const handleMouseEnter = () => {
  //     if (getComputedStyle(imgEl).flexDirection === 'column') {
  //       animation.to(imgEl, {
  //         duration: 1,
  //         height: '600px',
  //       });
  //       animation.to(
  //         imgEl,
  //         {
  //           duration: 0.5,
  //           autoAlpha: 1,
  //         },
  //         '<',
  //       );
  //       animation.play();
  //     } else {
  //       animation.to(imgEl, {
  //         duration: 1,
  //         width: imgEl.offsetWidth * 3,
  //       });
  //       animation.to(
  //         imgEl,
  //         {
  //           duration: 0.5,
  //           autoAlpha: 1,
  //         },
  //         '<',
  //       );
  //       animation.play();
  //     }
  //   };

  //   const handleMouseLeave = () => {
  //     animation.reverse();
  //   };

  //   imgEl.addEventListener('mouseenter', handleMouseEnter);
  //   imgEl.addEventListener('mouseleave', handleMouseLeave);

  //   return () => {
  //     imgEl.removeEventListener('mouseenter', handleMouseEnter);
  //     imgEl.removeEventListener('mouseleave', handleMouseLeave);
  //   };
  // }, [imgUrl]);

  return (
    // TODO: IF flex-row, the animation has to be changed to change height
    <div
      className={`${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } relative transition-[flex] duration-[2s] ease-in-out-flex cursor-pointer h-[700px] min-w-[170px] `}
      onClick={() => handleClick(id)}
    >
      <img
        ref={imgRef}
        src={imgUrl}
        alt={title}
        className="object-cover absolute rounded-[24px] h-full w-full "
      />
      {active !== id ? (
        <div className="absolute z-0 bottom-0 overflow-hidden h-full">
          <h3 className="font-semibold text-white sm:text-[26px] pl-4 text:[18px] lg:rotate-[-90deg] translate-y-[-100px]">
            {title}
          </h3>
        </div>
      ) : (
        <div className="absolute z-0 bottom-0 p-8 w-full bg-gray-2 ">
          <div
            className="w-[60px] h-[60px] glassmorphism rounded-[24px]"
            style={{ border: 'none' }}
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-full mx-auto my-0"
            />
          </div>
          <div className="text-white uppercase text-[16px] leading-[20px] my-5">
            Enter Metaverse
          </div>
          <h3 className="font-semibold text-white sm:text-[26px] text:[18px]">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default ExploreCard;
