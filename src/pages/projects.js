import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/My project (1).png";
import project2 from "../../public/images/projects/My project (2).png";
import project3 from "../../public/images/projects/My project (3).png";
import project4 from "../../public/images/projects/My project (6).png";
import{motion} from "framer-motion";



const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img , link, github}) => {
    return(
        
            <article className='w-full flex items-center justify-between relative rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
            lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-3xl xs:p-4
            '>
                    <div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light 
                    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
                    '/>
                <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                    
                    <FramerImage src={img} alt={title} className="w-full h-auto" 
                   
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width:768px) 100vw,
                    (max-width:1200px) 50vw,
                    50vw'/>
                    
                </Link>
                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base lg:text-lg'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left font-bold dark:text-light sm:text-sm' style={{ fontSize: '1.5rem' }}>{title}</h2>

                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon /> </Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark 
                    sm:px-4 sm:text-base
                    '
                    >Visit Project </Link>

                </div>
                </div>
            </article>
        
    )
}
const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
                    rounded-br-3xl'/>
            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    
                    <FramerImage src={img} alt={title} className="w-full h-auto" 
                
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    />
                </Link>
                <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left font-bold lg:text-2xl' style={{ fontSize: '1.25rem' }}>{title}</h2>

                </Link>
                
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target='_blank'
                    className='text-lg font-semibold underline md:text-base'
                    >Visit</Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon /> </Link>
                    

                </div>
                </div>
        </article>

    )
}

const projects = () => {
  return (
    <>
    <Head>
    <title>Kenneth Camacho | Projects Page</title>
    <meta name='description' content='Software Engineer' />
</Head>
    <main className='font-normal w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-12 font-normal items-center'>
        <div className="text-container">

 <AnimatedText text="Imagination" className='!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl'/>
 <AnimatedText text="==" className='!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl'/>
 <AnimatedText text="Innovative projects!" className='!text-5xl !text-center lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl'/>

<br /> 

</div>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                <FeaturedProject 
title="AI Authenticator - Uniface"
img={project1}
summary="Uniface is a groundbreaking facial recognition authentication solution that harnesses AI-driven deep learning algorithms and advanced computer 
vision techniques, including Convolutional Neural Networks (CNNs) and feature extraction. Designed for seamless integration across various industries, 
it offers low-latency processing, adaptability, and resistance against adversarial attacks. Its modular and extensible nature allows customization to 
meet unique enterprise needs, while liveness detection mechanisms counteract spoofing attempts. By implementing Uniface, organizations can strengthen 
security, optimize access management, and enhance user experience, positioning themselves as leaders in the digital transformation era."
link="https://github.com/Kennethcxv/UniFace-AI-Authenticator/tree/main/UniFace"
github="https://github.com/Kennethcxv/UniFace-AI-Authenticator/tree/main/UniFace"
type="Featured Project"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
title="AI Text to Image - Imagin AI"
img={project2}
summary="The ImaginAI project is an avant-garde AI-driven endeavor that specializes in the generation of high-fidelity images based on textual prompts, 
employing cutting-edge deep learning techniques and advanced generative adversarial networks (GANs). Utilizing a combination of transformer architectures 
and conditioning mechanisms, ImaginAI's neural network efficiently translates complex semantic information from text prompts into intricate visual representations, 
while maintaining coherence and context fidelity. The system incorporates state-of-the-art optimization algorithms, ensuring the generated images exhibit 
photorealistic attributes and fine-grained details. Furthermore, ImaginAI's robust design enables the handling of diverse content domains, offering extensive 
applicability across various industries. This groundbreaking technology paves the way for novel applications in visual storytelling, creative design, advertising,
and content generation, empowering businesses to harness the full potential of AI-driven visual synthesis."
link="https://github.com/Kennethcxv/AI-Image-Generator"
github="https://github.com/Kennethcxv/AI-Image-Generator"
type="Project"
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project
title="Country Sorter - GeoSorter"
img={project3}
summary="The GeoSorter project is a sophisticated AI-based endeavor that focuses on the efficient sorting and organization of countries using advanced 
search algorithms and data-driven optimization techniques. By employing a combination of heuristics, machine learning models, and graph theory, GeoSorter's 
innovative system analyzes a multitude of factors, including geographical proximity, political relationships, and socio-economic indicators, to generate an 
optimized sorting sequence. The implementation of parallel computing and distributed processing methodologies further enhances the solution's computational 
efficiency, allowing for real-time responsiveness and adaptability to evolving data. With its highly modular and extensible architecture, GeoSorter offers 
seamless integration across various industries and applications, such as geopolitical analysis, international trade, logistics, and travel planning, enabling 
organizations to harness the full potential of AI-driven geographical data management and optimization.
"
link="https://github.com/Kennethcxv/Country-Sorter"
github="https://github.com/Kennethcxv/Country-Sorter"
type="Project"
                    />
                </div>
                <div className='col-span-12'>
                <FeaturedProject 
title="Emotion Detecting AI - FaceFlow"
img={project4}
summary="The FaceFlow project is an innovative AI-driven initiative that specializes in facial recognition and muscle-based analysis, utilizing state-of-the-art 
deep learning algorithms and advanced computer vision methodologies. By employing a combination of Convolutional Neural Networks (CNNs) and cutting-edge 
electromyography (EMG) signal processing techniques, FaceFlow's robust system accurately discerns individuals based on their unique facial features and muscle 
patterns. The integration of multi-modal data fusion and real-time sensor fusion technologies further enhances the solution's precision, allowing for 
seamless detection even under diverse environmental conditions and varying facial expressions."
link="https://github.com/Kennethcxv/AI-Emotions-Classifier"
github="https://github.com/Kennethcxv/AI-Emotions-Classifier"
type="Featured Project"
                    />
                </div>
                
            </div>

        </Layout>
    </main>
</>
  )
}

export default projects