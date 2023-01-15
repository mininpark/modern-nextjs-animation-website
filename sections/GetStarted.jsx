'use client';

import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../styles';
import { MainText, TitleText, Features } from '../components';
import { startingFeatures } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const GetStarted = () => {
  const sectionGetStartedRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionGetStartedRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionGetStartedRef.current,
          scrub: 1,
        },
      },
    );
  });

  return (
    <section
      ref={sectionGetStartedRef}
      className={`${styles.yPaddings} sm:pl-16 pl-6 flex sm:flex-row flex-col items-center`}
    >
      <div className="sm:w-1/2 w-full">
        <img src="/get-started.png" alt="getstarted" className="w-full" />
      </div>
      <div className="sm:w-1/2 w-full">
        <MainText title="| How Metaverus Works" textStyles="text-left" />
        <div className="max-w-[470px]">
          <TitleText
            title="Get started with just a few clicks"
            textStyles="text-left sm:text-[48px] sm:line-height-[30px]"
          />
          {startingFeatures.map((feature, i) => (
            <Features
              flexStyle="flex flex-row"
              index={i}
              text={feature}
              icon={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
