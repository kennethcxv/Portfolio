
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
        
                




            


            
            <Experience />
            <Leadership />
            <Education />
            <Skills />
        </Layout>
    </main>
    </>
  )
}

export default about