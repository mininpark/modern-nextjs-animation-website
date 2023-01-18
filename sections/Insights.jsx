'use client';

import { InsightCard, MainText, TitleText } from '../components';
import { insights } from '../constants';
import styles from '../styles';

const Insights = () => (
  <section className={`${styles.paddings}`} id="insight">
    <div className="gradient-02 z-0" />

    <div
      className={`${styles.innerWidth} mx-auto flex flex-col justify-center center-align`}
    >
      <MainText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-[50px]">
        {' '}
        {insights.map((features, i) => (
          <InsightCard {...features} key={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
