'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles';
import { MainText, TitleText } from '../element';
import MapIcon from '../atom/MapIcon';
import { exploreWorlds } from '../../constants';

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
          // scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section className={`${styles.paddings} `}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <MainText title="| People on the World" textStyles="text-center" />
        <TitleText
          title="Track friends around you and invite them to play together in the same world"
          textStyles="text-center sm:text-[48px] sm:line-height-[30px]"
        />
        <div
          style={{ marginTop: '100px' }}
          ref={sectionWorldRef}
          className="relative"
        >
          <img src="/map.png" alt="map" />
          {exploreWorlds.map((item, i) => (
            <MapIcon {...item} className="relative" key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default World;
