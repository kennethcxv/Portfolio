import Head from 'next/head';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import SphereTagCloud from '../components/SphereTagCloud.js';
import React, { useEffect } from 'react';
import { SphereProvider } from '../components/SphereContext.js';


export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SphereProvider>
    <Head>
      <title>Kenneth Camacho</title>
      <meta name="description" content="Generated by Kenneth Camacho" />
    </Head>
 
    <main className="flex justify-center  xl:items-start items-center w-full min-h-screen bg-white dark:bg-black">
  
        {/* Sphere Tag Cloud on the left */}
      <div className=" w-1/2 2xl:ml-10 sm:block">
        <SphereTagCloud />
      </div>
      {/* Content on the right */}
      <div className="w-3/5 text-center xl:mr-32 xl:w-full xl:text-center  xl:text-md">
        <h1 className="text-5xl 2xl:text-[40px] 2xl:mr-20 font-semibold text-dark  mr-44 dark:text-light">
          <Typewriter
              options={{
                strings: [
                  'Welcome to my Portfolio!',
                  'Discover Innovative Solutions',
                  'Explore My Projects',
                  'Journey with Me in Technology'
                ],
                autoStart: true,
                loop: true,
                
              }}
            />
          </h1>
          <p 
          className="my-6 sm:bg-red-600 md:bg-purple-500 lg:bg-blue-500 2xl:bg-orange-500  2xl:mr-20 xl:bg-green-500 sm:text-sm md:text-md xl:align-top   xl:text-xl lg:text-lg  2xl:text-lg 2xl:ml-5 2xl:mb-60  text-lg font-medium mr-44 text-dark dark:text-light">
            I'm Kenneth Camacho, a software engineering student at Florida State University with a knack for developing innovative solutions. In this portfolio, you'll find a showcase of my projects ranging from AI-driven applications to full-stack development. Each project reflects my commitment to quality, efficiency, and user-centric design. Dive in to see how my work at Sebanda Insurance, as a Team Lead at Founders Deep Learning Startup, and various freelance endeavors have shaped my professional journey. I'm excited to share these experiences with you.
          </p>
          <div className="flex items-center justify-center mt-2 mr-44">
          <Link href="/Kenneth_Camacho_Resume.pdf" target="_blank" 
          className="2xl:mr-5 2xl:ml-20 xl:mr-10 xl:ml-10 flex bg-dark 2xl:-mt-96 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base">
              Resume
            </Link>
            <a href="mailto:kennethcxv@outlook.com" target="_blank" 
      
            className="2xl:-ml-0 2xl:mr-15 xl:-mr-10 xl:-ml-5 flex 2xl:-mt-96 ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
              Contact
            </a>
          </div>
       
        </div>
      </main>
      </SphereProvider>
  );
}