'use client';
import React from 'react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from '../../styles';
import { MainText, TitleText, Features } from '../element';
import { newFeatures } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const WhatsNew = () => {
  const sectionWhatsNewRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionWhatsNewRef.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionWhatsNewRef.current,
          scrub: 1,
        },
      },
    );
  });

  return (
    <section ref={sectionWhatsNewRef} className={`${styles.paddings} `}>
      <div
        className={`${styles.innerWidth} mx-auto flex sm:flex-row flex-col-reverse items-center`}
      >
        <div className="sm:w-1/2 w-full">
          <MainText title="| What's New?" textStyles="text-left" />
          <TitleText
            title="What's new about Minaverse?"
            textStyles="text-left sm:text-[48px] sm:line-height-[30px]"
          />
          <div className="flex sm:flex-row flex-col">
            {newFeatures.map((feature, i) => (
              <Features
                flexStyle="sm:w-1/2 w-full"
                index={i}
                {...feature}
                icon={false}
              />
            ))}
          </div>
        </div>
        <div className="sm:w-1/2 w-full">
          <img src="/whats-new.png" alt="whatsnew" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;
