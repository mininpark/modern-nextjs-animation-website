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
          <img src="/map.png" alt="map" className="w-full" />
          {/* TODO: HOW TO PUT OBJECTS IN MAP WITH DIFFEREN POSITIONS CSS */}
          {exploreWorlds.map((item, i) => (
            <div key={i}>
              <div className="absolute top-[20px] left-[100px]">
                <MapIcon peopleImgIndex="1" {...item} />
              </div>
              <div className="absolute top-[300px] left-[200px]">
                <MapIcon peopleImgIndex="2" {...item} />
              </div>
              <div className="absolute top-[200px] left-[450px]">
                <MapIcon peopleImgIndex="3" {...item} />
              </div>
              <div className="absolute top-[100px] right-[370px]">
                <MapIcon peopleImgIndex="1" {...item} />
              </div>
              <div className="absolute bottom-[200px] right-[150px]">
                <MapIcon peopleImgIndex="3" {...item} />
              </div>
            </div>
          ))}
        </div>
        <div className="gradient-04 z-0" />
      </div>
    </section>
  );
};
export default World;
