'use client';

import { useRef, useEffect } from 'react';

import gsap from 'gsap';
import styles from '../styles';

const Hero = () => {
  const heroRefTop = useRef();
  const heroRefBottom = useRef();
  const heroCover = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRefTop.current,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, duration: 2, delay: 1 },
    );
    gsap.fromTo(
      heroRefBottom.current,
      { autoAlpha: 0, y: 100 },
      { autoAlpha: 1, y: 0, duration: 2, delay: 1.2 },
    );
    gsap.fromTo(
      heroCover.current,
      { autoAlpha: 0, x: 100 },
      { autoAlpha: 1, x: 0, duration: 0.8 },
    );
  }, []);

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <div className="w-full mx-auto flex flex-col">
        <div className="flex justify-center items-center flex-col relative z-10">
          <h1 className={styles.heroHeading} ref={heroRefTop}>
            Metaverse
          </h1>
          <div
            className="flex flex-row justify-center items-center"
            ref={heroRefBottom}
          >
            <h1 className={styles.heroHeading}>Ma</h1>
            <div className={`${styles.heroDText} md:mt-[9px] mt-[0px]`} />
            <h1 className={styles.heroHeading}>NESS</h1>
          </div>
        </div>
        <div
          className="relative w-full md:-mt-[20px] -mt-[12px]"
          ref={heroCover}
        >
          {/* self-closing div element is used to create an element that is used for styling purposes only. */}
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <img
            src="/cover.png"
            alt="hero cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
