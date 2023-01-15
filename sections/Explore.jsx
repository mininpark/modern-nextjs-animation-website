'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles';
import { MainText, ExploreCard, TitleText } from '../components';
import { exploreWorlds } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const sectionExploreRef = useRef();

  const [active, setActive] = useState();

  useEffect(() => {
    gsap.fromTo(
      sectionExploreRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionExploreRef.current,
          scrub: 1,
        },
      },
    );
  });

  return (
    <section
      className={`${styles.paddings}`}
      id="explore"
      ref={sectionExploreRef}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center center-align`}
      >
        <MainText
          title="| The World"
          textStyles="text-center"
          className="flex-center"
        />
        <TitleText
          title="Choose the world you want to explore"
          textStyles="text-center"
        />
        <div
          className="mt-[50px] flex flex-col lg:flex-row gap-5 mx-auto w-full min-h-[70vh] max-h-[100vh]"
          id="exploreFlex"
        >
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
