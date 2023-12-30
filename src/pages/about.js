
import Layout from '@/components/Layout'
import {useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/UpperHalf.png";
import { Truculenta } from 'next/font/google'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Leadership from '@/components/Leadership'
import Education from '@/components/Education'



const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000 })
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    useEffect(() => {
        springValue.on("change",(latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue,value])
    

     return <span ref={ref}></span>
 }



const about = () => {
  return (
    <>
    <Head>
        <title>Kenneth Camacho | About Page</title>
        <meta name='description' content='Software Engineer' />
    </Head>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
        {/* <AnimatedText text="Unleashing the Power of Technology!" className='mb-16 !text-5xl !text-center lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8'/>  */}
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                    <p className='font-medium'>I'm Kenneth Camacho, a Computer Science major at Florida State University with a GPA of 3.9/4.0. My expertise lies in machine learning, backend engineering, and I have a robust foundation in data structures, computer architecture, and software engineering.</p>
                    <p className='my-4 font-medium'>During my internship at Sebanda Insurance, I developed AI accounting software, enhancing efficiency and accuracy significantly. My role at Founders Deep Learning Startup as a team lead involved creating a system for predicting disease outbreaks, utilizing advanced deep learning techniques.</p>
                    <p className='font-medium'>I'm skilled in languages like C, C++, Python, Java, and JavaScript, and I'm proficient in React, .NET, Next.js, and TypeScript. My education and experiences have honed my abilities in database management, software engineering, and machine learning applications.</p><br />
                    <p className='font-medium'>I'm passionate about leveraging technology to solve real-world problems and am always eager to explore new challenges in the field of computer science.</p>
            </div>

<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
    <Image src={profilePic} alt="KennethCamacho" className='w-full h-auto rounded-2xl' 
    priority
    sizes='(max-width:768px) 100vw,
    (max-width:1200px) 50vw,
    33vw'/>
</div>

<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
            <AnimatedNumbers value={2500} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Students Taught</h2>
    </div>
    <div className='flex flex-col items-end justify-center xl:items-center'>
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
    <AnimatedNumbers value={20} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
    </div>
    <div className='flex flex-col items-end justify-center xl:items-center'>
        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
        <AnimatedNumbers value={4} />+
        </span>
        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
    </div>
</div>
            </div>


            <Skills />
            <Experience />
            <Leadership />
            <Education />
        </Layout>
    </main>
    </>
  )
}

export default about