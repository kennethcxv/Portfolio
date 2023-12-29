// import AnimatedText from '@/components/TypingText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Uniface from "../../public/images/projects/UniFaceImage.png"
import EmotionsClassifier from "../../public/images/projects/Ai Emotions Classifier.png"
import CountrySorter from "../../public/images/projects/CountrySorterImage.png"
import TextToImage from "../../public/images/projects/Ai Text to Image.png"
import project1 from "../../public/images/projects/UniFace.png"

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
// ... existing imports ...

const projects = () => {
    return (
      <>
        <Head>
          <title>Kenneth Camacho | Projects Page</title>
          <meta name='description' content='Software Engineer' />
        </Head>
        <main className='font-normal w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
          <Layout className='pt-12 font-normal items-center'>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
              
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Social Media Application"
                  img={Uniface}
                  summary="Uniface is a groundbreaking facial recognition authentication solution..."
                  link="https://github.com/kennethcxv/Social-Media-App"
                  github="https://github.com/kennethcxv/Social-Media-App"
                  type="Featured Project"
                />
              </div>
  
              {/* New Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Audio Scribe AI"
                  img={project1} // Replace with actual image import
                  summary="Project summary 2. Brief description of the project."
                  link="https://github.com/kennethcxv/Audio-Scribe-AI" // Replace with actual project link
                  github="https://github.com/kennethcxv/Audio-Scribe-AI" // Replace with actual GitHub link
                  type="Project"
                />
              </div>
                {/* New Regular Project 1 */}
                <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Managing SystemSQL"
                  img={project1} // Replace with actual image import
                  summary="Project summary 2. Brief description of the project."
                  link="https://github.com/kennethcxv/Managing-SystemSQL" // Replace with actual project link
                  github="https://github.com/kennethcxv/Managing-SystemSQL" // Replace with actual GitHub link
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Twitter"
                  img={project1}
                  summary="Uniface is a groundbreaking facial recognition authentication solution..."
                  link="https://github.com/kennethcxv/Twitter"
                  github="https://github.com/kennethcxv/Twitter"
                  type="Featured Project"
                />
              </div>
  
              {/* Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Cryptocurrency Trading Bot"
                  img={project1}
                  summary="The ImaginAI project is an avant-garde AI-driven endeavor..."
                  link="https://github.com/kennethcxv/Cryptocurrency-Trading-Bot"
                  github="https://github.com/kennethcxv/Cryptocurrency-Trading-Bot"
                  type="Project"
                />
              </div>
  
              {/* Regular Project 2 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Precision Control Robotic Arm"
                  img={project1}
                  summary="The GeoSorter project is a sophisticated AI-based endeavor..."
                  link="https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm"
                  github="https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm"
                  type="Project"
                />
              </div>

            {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Ai Sign Language Translator"
                  img={project1}
                  summary="Uniface is a groundbreaking facial recognition authentication solution..."
                  link="https://github.com/kennethcxv/AI-Sign-Language-Translator"
                  github="https://github.com/kennethcxv/AI-Sign-Language-Translator"
                  type="Featured Project"
                />
              </div>
              {/* Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Kendrick Lamar Website"
                  img={project1}
                  summary="The GeoSorter project is a sophisticated AI-based endeavor..."
                  link="https://github.com/kennethcxv/Kendrick-Lamar-Website"
                  github="https://github.com/kennethcxv/Kendrick-Lamar-Website"
                  type="Project"
                />
              </div>
                {/* Regular Project 2 */}
                <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Country Sorter"
                  img={CountrySorter}
                  summary="The GeoSorter project is a sophisticated AI-based endeavor..."
                  link="https://github.com/kennethcxv/Country-Sorter"
                  github="https://github.com/kennethcxv/Country-Sorter"
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Pulse Tactical Warfare"
                  img={project1}
                  summary="Uniface is a groundbreaking facial recognition authentication solution..."
                  link="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                  github="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                  type="Featured Project"
                />
              </div>
              {/* Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="AI Emotions Classifier"
                  img={EmotionsClassifier}
                  summary="The GeoSorter project is a sophisticated AI-based endeavor..."
                  link="https://github.com/kennethcxv/AI-Emotions-Classifier"
                  github="https://github.com/kennethcxv/AI-Emotions-Classifier"
                  type="Project"
                />
              </div>
               {/* Regular Project 2 */}
               <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="AI Text to Image Generator"
                  img={TextToImage}
                  summary="The GeoSorter project is a sophisticated AI-based endeavor..."
                  link="https://github.com/kennethcxv/AI-Text-To-Image-Generater"
                  github="https://github.com/kennethcxv/AI-Text-To-Image-Generater"
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Uni-Face"
                  img={project1}
                  summary="Uniface is a groundbreaking facial recognition authentication solution..."
                  link="https://github.com/kennethcxv/Emerge-Hackathon"
                  github="https://github.com/kennethcxv/Emerge-Hackathon"
                  type="Featured Project"
                />
              </div>
            </div>
          </Layout>
        </main>
      </>
    )
  }
  
  export default projects;
  