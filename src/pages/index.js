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
    <SphereProvider> {/* Wrap your components with SphereProvider */}
      <Head>
        <title>Kenneth Camacho</title>
        <meta name="description" content="Generated by Kenneth Camacho" />
      </Head>
      <main className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-white to-a6c1ee">
        {/* Sphere Tag Cloud on the left */}
        <div className="w-1/2 ml-32 ">
          <SphereTagCloud />
        </div>

        {/* Content on the right */}
        <div className="w-1/2 text-center">
          <h1 className="text-5xl font-semibold  mr-40">
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
          <p className="my-4 text-base font-medium  md:text-lg sm:text-md mr-40">
            I'm Kenneth Camacho, a software engineering student at Florida State University with a knack for developing innovative solutions. In this portfolio, you'll find a showcase of my projects ranging from AI-driven applications to full-stack development. Each project reflects my commitment to quality, efficiency, and user-centric design. Dive in to see how my work at Sebanda Insurance, as a Team Lead at Founders Deep Learning Startup, and various freelance endeavors have shaped my professional journey. I'm excited to share these experiences with you.
          </p>
          <div className="flex items-center justify-center mt-2 mr-40">
            <Link href="/Kenneth_Camacho_Resume.pdf" target="_blank" className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:p-2 md:px-4 md:text-base">
              Resume
            </Link>
            <a href="mailto:kennethcxv@outlook.com" target="_blank" className="ml-4 text-lg font-medium capitalize  text-dark underline dark:text-light md:text-base">
              Contact
            </a>
          </div>
       
        </div>
      </main>
      </SphereProvider>
  );
}
