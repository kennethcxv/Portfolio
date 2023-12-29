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
    const{scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                
position="Software Engineer Intern" company= "Sebanda Insurance"
companyLink="https://www.sebandainsurance.com/"
time="Mar 2019 - Feb 2023"  address="| Miami, FL"
work="I played a pivotal role in the design and development of a robust accounting software system using Python, which led to a 20% increase in data entry accuracy and enhanced financial 
reporting capabilities. This, in turn, facilitated informed decision-making and improved management. In addition to the software development, I conducted hands-on technical training to 
ensure smooth adoption of the new system, resulting in high user satisfaction and empowering employees with the skills needed to effectively utilize the software. Furthermore, I was 
instrumental in optimizing workflow processes by integrating the new accounting software system, eliminating manual tasks, and boosting overall efficiency by 15%. This fostered a more 
streamlined work environment and increased productivity across the board."
/>
<Details 
                
position="Software Engineer" company= "Freelancer"
                time="May 2021 - Jan 2023 | Remote" 
                work="As a software engineer freelancer, I skillfully designed and developed custom software solutions using Python, C++, and Java to 
                address clients' unique requirements and preferences, showcasing my expertise across various programming languages and platforms. By 
                collaborating closely with clients, I was able to create tailored software solutions that enhanced database performance by 40% and 
                improved the efficiency of meal planning and task organization apps, ultimately increasing user satisfaction and streamlining operations. 
                In addition, my ability to facilitate seamless communication with cross-functional teams allowed me to employ my technical expertise and 
                interpersonal skills to improve project management by 25%, ensuring on-time delivery of software solutions and fostering a collaborative 
                work environment that encouraged innovation and creative problem-solving."
                />
                <Details 
                
                position="Founder & Owner" company= "Code Culture"
                time="Aug 2022 – Present | Miami, FL" 
                work="I took the initiative to create a non-profit Discord server that rapidly grew into a thriving 
                community of more than 500+ dedicated developers and programmers. Our members, coming from diverse backgrounds and skill levels, leverage cutting-edge 
                technologies to provide innovative solutions to an array of complex technical problems.I meticulously customized and implemented advanced bots equipped with features such as automated moderation and personalized 
                role management. These enhancements not only contributed to a 20% increase in user engagement but also led to a 30% reduction in the moderation workload 
                for our dedicated staff. Code Culture remains at the forefront of technology and serves as an indispensable resource for the ever-expanding tech community."
                />
                </ul>
            </div>
        </div>
  )
}

export default Experience