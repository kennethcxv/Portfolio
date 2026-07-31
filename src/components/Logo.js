import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        aria-label="Kenneth Camacho, home"
        className="flex h-16 w-16 items-center justify-center rounded-full border border-solid border-transparent bg-dark text-2xl font-bold text-light transition-colors hover:border-dark hover:bg-light hover:text-dark dark:border-light dark:hover:bg-light dark:hover:text-dark md:h-14 md:w-14 md:text-xl"
      >
        KC
      </MotionLink>


        </div>
  );
};

export default Logo;


