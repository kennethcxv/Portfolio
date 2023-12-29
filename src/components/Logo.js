import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light hover:bg-white 
        hover:text-dark hover:border-dark dark:hover:bg-white dark:hover:border-black"
        
      >KC</MotionLink>


        </div>
  );
};

export default Logo;


