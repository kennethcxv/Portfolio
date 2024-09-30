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
                        work="Founded a non-profit Discord server, now the largest programming club at FSU, with over 3,500+ developers. Implemented advanced bots with features such as automated moderation and customized role management, leading to a 20% increase in user engagement and 30% reduction in moderation workload.
"
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
                        companyLink="https://developers.google.com/community/gdsc"
                        time="Jan 2023 – Present | Miami,Fl"
                        work="As a Google Student Developer, I work on web/mobile projects, mentor developers, and boost our tech skills."
                    />
                    <Details    
                        position="Interview Prep"
                        company="CodePath"
                        companyLink="https://www.codepath.org/"
                        time="Feb 2024 – May 2024 | Miami,Fl"
                        work="Mastered advanced algorithms and data structures while achieving a 95th percentile ranking in technical interviews"
                    />


                </ul>
            </div>
        </div>
    );
}

export default Leadership;
