'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from '../styles';

const Navbar = () => {
  const navbarRef = useRef();

  useEffect(() => {
    gsap.fromTo(navbarRef.current, 1, { y: -100 }, { y: 0, delay: 0.5 });
  }, []);

  return (
    <nav className={`${styles.xPaddings} py-8 relative`} ref={navbarRef}>
      <div className="absoulte inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          MINAVERSE
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
