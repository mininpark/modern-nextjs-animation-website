'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MainText = ({ title, textStyles }) => {
  const mainTextRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mainTextRef.current,
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: mainTextRef.current,
        },
      },
    );
  }, []);

  return (
    <p
      className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
      ref={mainTextRef}
    >
      {Array.from(title).map((letter, index) => (
        <span key={index}>{letter === ' ' ? '\u00A0' : letter}</span>
      ))}
    </p>
  );
};

export const TitleText = ({ title, textStyles }) => {
  const mainTitleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      mainTitleRef.current,
      { autoAlpha: 0, x: 20 },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1,
        x: 0,
        scrollTrigger: {
          trigger: mainTitleRef.current,
        },
      },
    );
  }, []);

  return (
    <h2
      className={`font-extrabold md:text-[58px] text-[40px] md:leading-[70px] leading-[56px] text-white break-words ${textStyles}`}
      ref={mainTitleRef}
    >
      {title}
    </h2>
  );
};
