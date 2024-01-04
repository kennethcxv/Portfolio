import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                    {position}&nbsp;
                    <a 
                        href={companyLink}
                        target='_blank'
                        rel="noopener noreferrer"
                        className='text-primary dark:text-primaryDark capitalize'
                    >@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
};

const Leadership = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Leadership</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                        position="Founder & Owner"
                        company="Code Culture"
                        companyLink="https://discord.gg/code-culture"
                        time="Aug 2022 – Present | Miami, FL"
                        work="Led the creation and growth of Code Culture, a non-profit Discord server. Focused on fostering a community of developers and programmers, providing a platform for collaboration, learning, and sharing of ideas. Successfully managed a team of moderators and implemented innovative features to enhance user experience."
                    />
                    <Details 
                        position="Founder & Owner"
                        company="Pulse Tactical Warfare"
                        companyLink="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                        time="Apr 2021 – Present | Miami,Fl"
                        work="Initiated and managed the development of a complex FPS game, demonstrating leadership in project management, technical direction, and community engagement. Actively involved in all aspects of game development from concept to execution, including programming, design, and marketing strategies."
                    />
                    <Details 
                        position="Lead Full Stack"
                        company="Google Student Developer"
                        companyLink=""
                        time="Jan 2023 – Present | Miami,Fl"
                        work="As the Chief Full Stack Developer at FSU's Google Student Developer Club, I lead a dynamic team in creating innovative web and mobile applications, focusing on cutting-edge technology. My role encompasses mentoring and fostering professional growth, allowing me to significantly enhance our technical projects and my skills in project management and advanced full-stack development, thus reinforcing my standing in FSU's tech community.                        "
                    />


                </ul>
            </div>
        </div>
    );
}

export default Leadership;
