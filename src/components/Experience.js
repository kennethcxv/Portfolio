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
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                        position="Software Engineer Intern"
                        company="Sebanda Insurance"
                        companyLink="https://www.sebandainsurance.com/"
                        time="Mar 2021 – Dec 2023 | Miami, FL"
                        work="Developed AI accounting software with Python, reducing errors by 35%, reporting time by 25%, and improving efficiency by 15%. Partnered to set up a cloud infrastructure, achieving 99.5% stability and cutting costs by 20%. Implemented OCR and NLP for faster claims processing, enhancing speed by 30% and elevating customer satisfaction."
                    />
                    <Details 
                        position="Software Engineer Team Lead"
                        company="Deep Learning Startup"
                        time="Jun 2023 – Aug 2023 | Remote"
                        work="Led a team to create a system predicting disease outbreaks using medical records, social media, and weather data. Applied State-of-the-Art Deep Learning Techniques, including neural networks and Natural Language Processing, to accurately predict disease outbreaks, aiding proactive healthcare responses."
                    />
                    <Details 
                        position="Software Engineer"
                        company="Freelancer"
                        time="Apr 2021 – March 2023 | Remote"
                        work="Led e-commerce backend improvements, reducing load times by 15% and increasing transactions by 10%, while also crafting a dashboard that boosted sales insights by 25%. Executed a 50+ GB data transition to AWS, decreasing retrieval times by 20% with a consistent 99.9% uptime."
                    />
                    {/* Add more <Details /> components for other experiences as needed */}
                </ul>
            </div>
        </div>
    );
}

export default Experience;
