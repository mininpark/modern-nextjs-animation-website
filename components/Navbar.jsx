'use client';

import { useRef } from 'react';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from '../styles';
// import { navVariants } from '../utils/motion';

const Navbar = () => {
  const myRef = useRef();

  const navbarRef = (element) => {
    myRef.current = element;
    gsap.fromTo(element, 1, { y: -40 }, { y: 0 });
    console.log(myRef);
  };

  return (
    <nav className={`${styles.xPaddings} py-8 relative`} ref={navbarRef}>
      <div className="absoulte inset-0">
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />
          <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
            METAVERSE
          </h2>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
