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
                        company="Culture Coder"
                        companyLink="https://github.com/kennethcxv/Social-Media-App"
                        time="Dec 2022 – Present | Remote"
                        work="Established and grew a full-stack social media platform tailored for programmers. Oversaw all aspects of the project, including development, funding, and user engagement. Successfully built a platform that not only serves as a social network but also as a learning resource for the programming community."
                    />
                    <Details 
                        position="Founder & Owner"
                        company="Pulse Tactical Warfare"
                        companyLink="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                        time="Apr 2021 – Present | Remote"
                        work="Initiated and managed the development of a complex FPS game, demonstrating leadership in project management, technical direction, and community engagement. Actively involved in all aspects of game development from concept to execution, including programming, design, and marketing strategies."
                    />
                    <Details 
                        position="Founder & Owner"
                        company="Pencils For Latin America"
                        companyLink="https://www.gofundme.com/f/pencils-for-latin-america-Dominican-Republic"
                        time="Apr 2018 – Present"
                        address=""
                        work="Co-founded a non-profit initiative, raising $3000+ and distributing 700lbs of educational resources for the underprivileged school the Escuela de Primaria Cabrera de Toro in Dominican Republic. Amplified donor engagement and expanded organizational impact through data-driven marketing, social media, and community partnerships. Established and nurtured relationships with Latin American schools, enhancing the alignment of initiatives with community educational needs."
                    />

                </ul>
            </div>
        </div>
    );
}

export default Leadership;
