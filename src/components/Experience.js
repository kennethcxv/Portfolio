import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details =({position, company , companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp;
            <a 
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className=''>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                        position="Software Engineer"
                        company="EloStack"
                        companyLink="https://www.elostack.com/"
                        time="Sept 2023 – July 2024 | Miami, FL"
                        work="Developed advanced full-stack applications improving scalability and user experience with responsive, intuitive designs. Leveraged expertise in full-stack programming to optimize site performance, resulting in a 40% reduction in load times and a 25% increase in user retention rates.
"
                    />
                    <Details 
                        position="Software Engineer Intern"
                        company="Founders"
                        time="Jun 2023 – Aug 2023 | Miami, FL"
                        work="Developed a real-time collaboration tool using WebSockets, Node.js, and React, increasing team productivity by 40%. The tool integrated real-time editing, video conferencing (WebRTC), and project management. Engineered a data visualization dashboard with D3.js, React, Python, and Flask. It consolidated data from SQL databases and APIs into interactive visuals, improving decision-making efficiency by 35% for business users.
"
                    />
                    <Details 
                        position="Software Engineer Intern"
                        company="Sebanda Insurance"
                        companyLink="https://www.sebandainsurance.com/"
                        time="Mar 2021 – May 2023 | Miami, FL"
                        work="Developed an accounting system using Python, PostgreSQL, and Flask APIs. The system includes robust data validation, which reduced data entry errors by 20%, improved financial reporting accuracy, and increased efficiency by 15% through streamlined workflows and task automation. `To drive system adoption adoption, I delivered hands-on training, boosting user satisfaction and enabling employees to use the software effectively. This increased productivity and informed decision-making across the organization.
"
                    />
                    
                    
                    <Details 
                        position="Lead Competitive Programmer "
                        company="Doral Academy "
                        companyLink="https://www.doralacademyprep.org/"
                        time="Sept 2020 – May 2022 | Miami, FL"
                        work="Led Doral Academy's elite competitive programming team to multiple victories, securing first place in hackathons and consistently ranking in the top 5% at algorithmic contests. Spearheaded weekly training sessions for novice programmers, expertly teaching advanced data structures and algorithms, resulting in an accelerated progression to competitive-level programming

"
                    />
                    {/* Add more <Details /> components for other experiences as needed */}
                </ul>
            </div>
        </div>
    );
}

export default Experience;
