'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InsightCard, MainText, TitleText } from '../element';
import { insights } from '../../constants';
import styles from '../../styles';

gsap.registerPlugin(ScrollTrigger);

const Insights = () => {
  const sectionInsight = useRef();

  useEffect(() => {
    gsap.fromTo(
      sectionInsight.current,
      { autoAlpha: 0, y: 100 },
      {
        duration: 3,
        autoAlpha: 1,
        ease: 'power',
        y: -50,
        scrollTrigger: {
          trigger: sectionInsight.current,
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <section className={`${styles.paddings}`} id="insight" ref={sectionInsight}>
      <div className="gradient-02 z-0" />

      <div
        className={`${styles.innerWidth} mx-auto flex flex-col justify-center center-align`}
      >
        <MainText title="| Insight" textStyles="text-center" />
        <TitleText title="Insight about metaverse" textStyles="text-center" />
        <div className="mt-[50px]">
          {insights.map((features, i) => (
            <InsightCard {...features} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
