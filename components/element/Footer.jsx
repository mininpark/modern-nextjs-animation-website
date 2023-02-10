'use client';

import styles from '../../styles';
import { socials } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${styles.xPaddings} py-8 relative`}>
      <div className={`${styles.innerWidth} mx-auto`}>
        <div className="flex row justify-between mb-[80px] items-center">
          <h3 className="text-white font-extrabold text-[32px] md:text-[64px]">
            Enter the Metaverse
          </h3>
          <a
            href="/"
            className="text-white w-[64px] sm:w-[260px] h-[64px] bg-[#25618B] rounded-[32px] flex justify-center items-center"
          >
            <img src="headset.svg" alt="headset" />
            <span className="ml-4 uppercase sm:block hidden">
              Enter Metaverse
            </span>
          </a>
        </div>
        <hr className="opacity-10" />
        <div className="flex md:flex-row justify-between my-[50px] text-white flex-col items-center gap-y-10">
          <h1 className="text-[24px] font-extrabold">Minaverse</h1>
          <span className="text-white/70">
            Copyright © {currentYear} Minaverse. All rights reserved.
          </span>
          <div className="flex row gap-6">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[300px] footer-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
    </footer>
  );
};

export default Footer;
