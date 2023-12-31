// import AnimatedText from '@/components/TypingText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import UniFace from "../../public/images/projects/UniFace.png";
import Emotion from "../../public/images/projects/EmotionDetectingAi.png";
import TextToImage from "../../public/images/projects/TextToImage.png";
import Pulse from "../../public/images/projects/Pulse.png";
import KendrickLamar from "../../public/images/projects/KendrickLamar.png";
import CountrySorter from "../../public/images/projects/CountrySorter.png";
import SignLanguage from "../../public/images/projects/SignLanguageTranslator.png";
import Crypto from "../../public/images/projects/CryptocurrencyTradingBot.png";
import Robotic from "../../public/images/projects/RoboticArm.png";
import Twitch from "../../public/images/projects/Twitch.png";
import Audio from "../../public/images/projects/Audio.png";
import SQL from "../../public/images/projects/SQL.png";
import SocialMediaApp from "../../public/images/projects/SocialMediaApp.png";
import IssueTracker from "../../public/images/projects/IssueTracker.png";
import GameHub from "../../public/images/projects/GameHub.png";

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
                  img={SocialMediaApp}
                  summary="This app is a specialized social media platform designed for programmers, offering unique features tailored to their needs. Users can share code snippets, ideas, and updates in a tweet-like format, allowing for quick and efficient communication within the programming community. Additionally, the app includes interactive features such as liking, upvoting, downvoting, and the ability to reply directly to code, fostering a collaborative and engaging environment for developers."
                  link="https://github.com/kennethcxv/Social-Media-App"
                  github="https://github.com/kennethcxv/Social-Media-App"
                  type="Featured Project"
                />
              </div>
  
              {/* New Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Audio Scribe AI"
                  img={Audio} // Replace with actual image import
                  summary=""
                  link="https://github.com/kennethcxv/Audio-Scribe-AI" // Replace with actual project link
                  github="https://github.com/kennethcxv/Audio-Scribe-AI" // Replace with actual GitHub link
                  type="Project"
                />
              </div>
                {/* New Regular Project 1 */}
                <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Managin SystemSQL"
                  img={SQL} // Replace with actual image import
                  summary=""
                  link="https://github.com/kennethcxv/Managing-SystemSQL" // Replace with actual project link
                  github="https://github.com/kennethcxv/Managing-SystemSQL" // Replace with actual GitHub link
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Twitch"
                  img={Twitch}
                  summary="This app is a clone of Twitch, offering live streaming services primarily focused on video game broadcasting, e-sports competitions, and creative content. It enables users to broadcast their gameplay or other activities, interact with viewers through a chat interface, and build a community around shared interests. Additionally, the platform provides features for monetization, such as subscriptions, donations, and advertisements, allowing streamers to earn revenue from their content."
                  link="https://github.com/kennethcxv/Twitch"
                  github="https://github.com/kennethcxv/Twitch"
                  type="Featured Project"
                />
              </div>
  
              {/* Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Cryptocurrency Trading Bot"
                  img={Crypto}
                  summary=""
                  link="https://github.com/kennethcxv/Cryptocurrency-Trading-Bot"
                  github="https://github.com/kennethcxv/Cryptocurrency-Trading-Bot"
                  type="Project"
                />
              </div>
  
              {/* Regular Project 2 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Precision Control Robotic Arm"
                  img={Robotic}
                  summary=""
                  link="https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm"
                  github="https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm"
                  type="Project"
                />
              </div>

            {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Ai Sign Language Translator"
                  img={SignLanguage}
                  summary="This app is an AI-powered sign language translator, capable of translating American Sign Language (ASL) into spoken language in real-time. It features advanced hand-tracking technology that can be resized for accuracy, ensuring effective interpretation of ASL gestures. Additionally, the app provides a transcript of the translation and allows users to either view the text or hear it voiced by AI, enhancing accessibility for both deaf and hearing individuals."
                  link="https://github.com/kennethcxv/AI-Sign-Language-Translator"
                  github="https://github.com/kennethcxv/AI-Sign-Language-Translator"
                  type="Featured Project"
                />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Game Hub"
                  img={GameHub} // Replace with actual image import
                  summary=""
                  link="https://github.com/kennethcxv/Game-Hub" // Replace with actual project link
                  github="https://github.com/kennethcxv/Game-Hub" // Replace with actual GitHub link
                  type="Project"
                />
              </div>
                {/* Regular Project 2 */}
                <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Country Sorter"
                  img={CountrySorter}
                  summary=""
                  link="https://github.com/kennethcxv/Country-Sorter"
                  github="https://github.com/kennethcxv/Country-Sorter"
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="Pulse Tactical Warfare"
                  img={Pulse}
                  summary="Pulse Tactical Warfare is a dynamic first-person shooter (FPS) game that offers a variety of fast-paced gaming modes, including a thrilling battle royale, classic multiplayer, and an engaging zombies mode. Players can also enjoy solo play, where they face off against advanced AI opponents, adding depth to the gaming experience. The game is known for its intense action, strategic gameplay, and diverse environments, catering to a wide range of FPS enthusiasts."
                  link="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                  github="https://github.com/kennethcxv/Pulse-Tactical-Warfare"
                  type="Featured Project"
                />
              </div>
              {/* Regular Project 1 */}

               {/* Regular Project 2 */}
               <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="AI Text to Image Generator"
                  img={TextToImage}
                  summary=""
                  link="https://github.com/kennethcxv/AI-Text-To-Image-Generater"
                  github="https://github.com/kennethcxv/AI-Text-To-Image-Generater"
                  type="Project"
                />
              </div>
               {/* Regular Project 1 */}
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Kendrick Lamar Website"
                  img={KendrickLamar}
                  summary=""
                  link="https://github.com/kennethcxv/Kendrick-Lamar-Website"
                  github="https://github.com/kennethcxv/Kendrick-Lamar-Website"
                  type="Project"
                />
              </div>
              {/* Featured Project */}
              <div className='col-span-12'>
                <FeaturedProject 
                  title="UniFace"
                  img={UniFace}
                  summary="This AI Authenticator app, which secured 2nd place in a highly competitive 10,000-participant hackathon, is a cutting-edge facial recognition tool boasting an impressive 98% accuracy rate. Developed using Convolutional Neural Networks (CNNs) and OpenCV, it excels in real-time feature extraction, making it a top contender among 100 innovative solutions. Its advanced technology and reliable performance make it an outstanding achievement in the field of AI-driven security and authentication systems."
                  link="https://github.com/kennethcxv/Emerge-Hackathon"
                  github="https://github.com/kennethcxv/Emerge-Hackathon"
                  type="Featured Project"
                />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="AI Emotions Classifier"
                  img={Emotion}
                  summary=""
                  link="https://github.com/kennethcxv/AI-Emotions-Classifier"
                  github="https://github.com/kennethcxv/AI-Emotions-Classifier"
                  type="Project"
                />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                <Project
                  title="Issue Tracker"
                  img={IssueTracker}
                  summary=""
                  link="https://github.com/kennethcxv/Issue-Tracker"
                  github="https://github.com/kennethcxv/Issue-Tracker"
                  type="Project"
                />
              </div>
            </div>
          </Layout>
        </main>
      </>
    )
  }
  
  export default projects;
  