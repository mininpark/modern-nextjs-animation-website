'use client';

// import gsap from 'gsap';
import { useState } from 'react';
import styles from '../styles';
import { MainText, ExploreCard, TitleText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState();

  return (
    <section className={`${styles.paddings}`} id="explore">
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
