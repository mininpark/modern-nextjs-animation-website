'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles';
import { MainText } from '../element/CustomTexts';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionAboutRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionAboutRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionAboutRef.current,
          scrub: 1,
        },
      },
    );
  });

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <div ref={sectionAboutRef}>
        <div
          className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <MainText title="| About Metaverse" textStyles="text-center" />
          <p className="mt-[8px] front-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
            <span className="font-extrabold text-white">Metaverse </span>is a
            new thing in the future, where you can enjoy the virtual world by
            feeling like it's really real, you can feel what you feel in this
            metaverse world, because this is really the{' '}
            <span className="font-extrabold text-white">
              madness of the metaverse
            </span>{' '}
            of today, using only{' '}
            <span className="font-extrabold text-white"> VR </span> devices you
            can easily{' '}
            <span className="font-extrabold text-white">explore </span> the
            metaverse world you want, turn your dreams into reality. Let's
            explore the madness of the metaverse by scrolling down.
          </p>
          <img
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
