'use client';

import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles';
import { MainText, MapHover, TitleText } from '../components';
import { startingFeatures } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const World = () => {
  const sectionWorldRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionWorldRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 3,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionWorldRef.current,
          scrub: 1,
        },
      },
    );
  });
  return (
    <section className={`${styles.paddings} `}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <MainText title="| People on the World" textStyles="text-center" />
        <TitleText
          title="Track friends around you and invite them to play together in the same world"
          textStyles="text-center sm:text-[48px] sm:line-height-[30px]"
        />
        <div ref={sectionWorldRef} style={{ marginTop: '100px' }}>
          <img src="/map.png" alt="map" className="w-full" />
          <MapHover peopleImgIndex="1" />
        </div>
        <div className="gradient-04 z-0" />
      </div>
    </section>
  );
};
export default World;
