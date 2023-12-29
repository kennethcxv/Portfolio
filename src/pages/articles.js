import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, {useRef} from 'react'
import article1 from "../../public/images/articles/Knneth_Unraveling_The_Black_Box_Demystifying_Machine_Learning__ab544557-3d7f-4b06-b8a5-00ac1cb820a4.png"
import article2 from "../../public/images/articles/Knneth_The_Power_Of_Deep_Learning_890d68b1-13bf-4f81-bc43-b56f993401ed.png"
import{motion, useMotionValue} from "framer-motion";
import article3 from "../../public/images/articles/Knneth_Cybersecurity_and_Machine_Learning_62adf7a4-4b28-473e-a480-90d6eea7015e.png";
import article4 from "../../public/images/articles/Knneth_Enhancing_User_Experience_with_Human-Centered_Design_in_22a2f567-809e-487c-89dc-c55486a4ae82.png";
import article5 from "../../public/images/articles/Knneth_Bridging_the_Digital_Divide_How_Computer_Science_Can_Fo_d0265d97-e167-4657-ae13-7962f86d41b0.png";
import article6 from "../../public/images/articles/Knneth_Paving_the_Path_for_Ethical_AI_Addressing_Bias_and_Ensu_9a46b7df-c11d-4346-86d5-68c92351cf12.png";
const FramerImage = motion(Image);


const MovingImg = ({title, img, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event){
        imgRef.current.style.display="inline-block";
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event){
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}

        >

                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
                <FramerImage
                style={{x:x,y:y}}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration: 0.2}}}

                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden sm:!hidden xs:!hidden' />
            </Link>

    )
}

const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light text-dark first:mt-0 border border-solid border-dark
        border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
        sm:flex-col
        '>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2rem] bg-dark' 
                    rounded-br-3xl/>
            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                    
                    <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw'/>
                    
                </Link>
                <Link href={link} target='_blank'>
                    <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
                </Link>
                <p className='text-sm mb-2'>{summary}</p>
                <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    )
}


const articles = () => {
  return (
    <>
    <Head>
        <title>Kenneth Camacho | Articles Page</title>
        <meta name='description' content='Software Engineer' />
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text="The power of words " className='mb-16 !text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl' />
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                
                <FeaturedArticle 
title="Unraveling the Black Box: Demystifying Machine Learning for the Everyday User
"
summary="Machine Learning for Everyone 
offers an accessible overview of the fundamental concepts, applications, and practical uses of machine learning for everyday users. The blog post delves into supervised, unsupervised, and reinforcement learning while highlighting the technology's impact across healthcare, finance, marketing, transportation, and entertainment. By understanding the core principles of machine learning and its potential applications, users can harness its power to tackle common problems, such as email filtering, product recommendations, language translation, and home automation. As the technology continues to advance, machine learning is poised to play an increasingly significant role in our daily lives."

time="9 min read" 
link="https://KennethCamachoblog.blogspot.com/2023/04/unraveling-black-box-demystifying.html"
img={article1}
/>

<FeaturedArticle 
title="The Power of Deep Learning"
summary="In recent years, deep learning has made great progress, particularly in picture identification. This machine learning technology uses numerous layers of artificial neural networks to model complicated patterns and representations in data, and its capacity to learn features independently distinguishes it from previous methods. CNNs, a sort of deep learning architecture, have become the gold standard for image classification tasks, employing convolutional layers, pooling layers, and fully connected layers to learn spatial hierarchies of features in images. Image identification enabled by deep learning is being utilized to tackle common problems in a variety of fields, including medical imaging, social media, retail, augmented reality, and agriculture. Deep learning models will grow more precise and efficient as technology progresses, broadening their potential uses. Understanding the fundamentals of deep learning and its impact on picture identification allows us to grasp how this technology is altering our lives and solving common problems.
"

time="11 min read" 
link="https://KennethCamachoblog.blogspot.com/2023/04/the-power-of-deep-learning.html"
img={article2}
/>
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>

                All Articles
            </h2>
            <ul>
            <Article 
                title="Unraveling the Black Box: Demystifying Machine Learning for the Everyday User"
                date="April 22, 2023"
                link="https://KennethCamachoblog.blogspot.com/2023/04/unraveling-black-box-demystifying.html"
                img={article1}
                />
                <Article 
                title="The Power of Deep Learning"
                date="March 7, 2023"
                link="https://KennethCamachoblog.blogspot.com/2023/04/the-power-of-deep-learning.html"
                img={article2}
                />
                <Article 
                title="Leveraging Machine Learning to Combat the Cybersecurity Crisis"
                date="February 13, 2023"
                link="https://KennethCamachoblog.blogspot.com/2023/02/leveraging-machine-learning-to-combat.html"
                img={article3}
                />
                <Article 
                title="Enhancing User Experience with Human-Centered Design in Computer Science"
                date="January 9, 2023"
                link="https://KennethCamachoblog.blogspot.com/2023/01/enhancing-user-experience-with-human.html"
                img={article4}
                />
                <Article 
                title="Bridging the Digital Divide: How Computer Science Can Foster Inclusive Technology Access"
                date="December 5, 2022"
                link="https://KennethCamachoblog.blogspot.com/2022/12/bridging-digital-divide-how-computer.html"
                img={article5}
                />
                <Article 
                title=" Paving the Path for Ethical AI: Addressing Bias and Ensuring Fairness in Computer Science"
                date="September 8, 2022"
                link="https://kennethcamachoblog.blogspot.com/2022/09/paving-path-for-ethical-ai-addressing.html"
                img={article6}
                />
                
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles