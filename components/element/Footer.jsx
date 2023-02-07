'use client';
import styles from '../../styles';

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
            <a href="/">
              <img src="twitter.svg" alt="twitter" />
            </a>
            <a href="/">
              <img src="linkedin.svg" alt="linkedin" />
            </a>
            <a href="/">
              <img src="instagram.svg" alt="instagram" />
            </a>
            <a href="/">
              <img src="facebook.svg" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-[300px] footer-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
    </footer>
  );
};

export default Footer;
