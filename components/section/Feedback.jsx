'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../../styles';
import { feedback } from '../../constants';

const Feedback = () => {
  const sectionFeedback = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionFeedback.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionFeedback.current,
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section
      className={`${styles.paddings}`}
      id="explore"
      ref={sectionFeedback}
    >
      <div
        className={`${styles.innerWidth} mx-auto flex flex-col md:flex-row justify-between center-align gap-8`}
      >
        <div className="feedback-gradient" />
        <div className="row xm:w-full lg:max-w-[540px] h-[full] md:h-[610px] rounded-[24px] glassmorphism text-white p-8 md:pt-[250px]">
          <p className="font-extrabold text-[32px]">{feedback.name}</p>
          <p className="text-[18px]">{feedback.founder}</p>
          <p className="text-[24px]">{feedback.text}</p>
        </div>
        <div className="row w-full max-w-[800px] h-[full] sm:h-[610px]">
          <img
            src="/planet-09.png"
            alt="feedback-img"
            className="rounded-[24px] h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
