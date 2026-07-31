import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import RaftKV from "../../public/images/projects/RaftKVStore.svg";
import JobQueue from "../../public/images/projects/DistributedJobQueue.svg";
import CodeSearch from "../../public/images/projects/SemanticCodeSearch.svg";
import LiveStreaming from "../../public/images/projects/LiveStreaming.svg";
import ECommerce from "../../public/images/projects/ECommerce.svg";
import SocialMediaApp from "../../public/images/projects/SocialMediaDevs.svg";
import SignLanguage from "../../public/images/projects/SignLanguageTranslator.svg";
import Audio from "../../public/images/projects/AudioScribe.svg";
import Crypto from "../../public/images/projects/CryptoTradingBot.svg";
import TextToImage from "../../public/images/projects/TextToImage.svg";
import Emotion from "../../public/images/projects/EmotionClassifier.svg";
import Auth from "../../public/images/projects/AIAuthenticator.svg";
import SQL from "../../public/images/projects/SQLManagement.svg";
import Robotic from "../../public/images/projects/RoboticArm.svg";
import Pulse from "../../public/images/projects/PulseTacticalWarfare.svg";

const GITHUB_PROFILE = "https://github.com/kennethcxv";

const FEATURED_PROJECTS = [
  {
    title: "Distributed Key-Value Store (Raft)",
    type: "Distributed Systems | Go · RocksDB · Docker",
    img: RaftKV,
    summary:
      "I wrote the Raft consensus protocol from scratch in Go, then built a key-value store on top of it. Five nodes elect a leader, replicate a log, and recover cleanly from crashes. I threw simulated network partitions at it with over a million entries loaded and it kept strong consistency the whole time. Storage runs on RocksDB with MVCC versioning, writes clock in around 10k per second, and Prometheus tracks throughput and p99 latency. Each node ships in its own Docker container.",
    link: GITHUB_PROFILE,
    github: GITHUB_PROFILE,
  },
  {
    title: "Distributed Job Queue",
    type: "Distributed Systems | Go · Redis · Docker · Linux",
    img: JobQueue,
    summary:
      "A job queue in Go that spreads work across five worker nodes and chews through about 10k tasks an hour. Jobs carry priorities, a token bucket keeps anyone from flooding the queue, and work that keeps failing lands in a dead-letter queue instead of silently disappearing. Prometheus and Grafana watch queue depth, latency, and failure rates, and I wrote runbooks for the alerts that actually matter, like workers getting stuck.",
    link: GITHUB_PROFILE,
    github: GITHUB_PROFILE,
  },
  {
    title: "Semantic Code Search Engine",
    type: "AI / Search | Python · FastAPI · pgvector · Redis",
    img: CodeSearch,
    summary:
      "Search that understands what code does instead of just matching names. It blends BM25 keyword retrieval with embeddings stored in Postgres through pgvector, which cut irrelevant top results by 40% compared to a vector-only baseline on a query set I labeled by hand. There is an offline harness that scores recall@k and MRR so I can tell if a change actually helped, and a Redis cache that keeps p95 latency 35% lower under load. It indexes a 500k-line codebase.",
    link: GITHUB_PROFILE,
    github: GITHUB_PROFILE,
  },
];

const PROJECTS = [
  {
    title: "Live Streaming Platform",
    type: "Full-Stack",
    img: LiveStreaming,
    summary:
      "Go live over RTMP or WHIP, chat with viewers in real time, and manage it all from a streamer dashboard.",
    link: "https://github.com/kennethcxv/Full-Stack-Live-Streaming-Platform",
    github: "https://github.com/kennethcxv/Full-Stack-Live-Streaming-Platform",
  },
  {
    title: "E-Commerce Platform",
    type: "Full-Stack",
    img: ECommerce,
    summary:
      "Every vendor gets their own storefront, buyers get a normal cart and Stripe checkout, and admins get a dashboard to keep an eye on it all.",
    link: "https://github.com/kennethcxv/Full-Stack-E-Commerce",
    github: "https://github.com/kennethcxv/Full-Stack-E-Commerce",
  },
  {
    title: "Social Media for Developers",
    type: "Full-Stack",
    img: SocialMediaApp,
    summary:
      "A small network where programmers post code snippets and debate them in the replies. Votes decide what rises to the top.",
    link: "https://github.com/kennethcxv/Social-Media-App",
    github: "https://github.com/kennethcxv/Social-Media-App",
  },
  {
    title: "AI Sign Language Translator",
    type: "AI / ML",
    img: SignLanguage,
    summary:
      "Point a webcam at your hands and it translates ASL as you sign, with a running transcript and a voice that speaks it aloud.",
    link: "https://github.com/kennethcxv/AI-Sign-Language-Translator",
    github: "https://github.com/kennethcxv/AI-Sign-Language-Translator",
  },
  {
    title: "Audio Scribe AI",
    type: "AI / ML",
    img: Audio,
    summary:
      "Hand it a recording and it gives you back clean, searchable notes instead of a wall of text.",
    link: "https://github.com/kennethcxv/Audio-Scribe-AI",
    github: "https://github.com/kennethcxv/Audio-Scribe-AI",
  },
  {
    title: "Cryptocurrency Trading Bot",
    type: "Automation",
    img: Crypto,
    summary:
      "Watches live market data, generates signals, and executes trades on its own. Hard risk limits keep it from doing anything reckless.",
    link: "https://github.com/kennethcxv/Cryptocurrency-Trading-Bot",
    github: "https://github.com/kennethcxv/Cryptocurrency-Trading-Bot",
  },
  {
    title: "AI Text-to-Image Generator",
    type: "AI / ML",
    img: TextToImage,
    summary:
      "Type a sentence, get a picture. A clean interface wrapped around a generative model.",
    link: "https://github.com/kennethcxv/AI-Text-To-Image-Generater",
    github: "https://github.com/kennethcxv/AI-Text-To-Image-Generater",
  },
  {
    title: "AI Emotions Classifier",
    type: "AI / ML",
    img: Emotion,
    summary:
      "A neural network I trained to read emotion from both text and faces, then tell you how sure it is.",
    link: "https://github.com/kennethcxv/AI-Emotions-Classifier",
    github: "https://github.com/kennethcxv/AI-Emotions-Classifier",
  },
  {
    title: "AI Authenticator",
    type: "AI / Security",
    img: Auth,
    summary:
      "An experiment in logging in with your face. Computer vision up front, a properly secured flow behind it.",
    link: "https://github.com/kennethcxv/AI-Authenticator",
    github: "https://github.com/kennethcxv/AI-Authenticator",
  },
  {
    title: "SQL Management System",
    type: "Databases",
    img: SQL,
    summary:
      "Tools for designing schemas, writing queries, and handling the unglamorous admin work every database needs.",
    link: "https://github.com/kennethcxv/Managing-SystemSQL",
    github: "https://github.com/kennethcxv/Managing-SystemSQL",
  },
  {
    title: "Precision Robotic Arm",
    type: "Robotics",
    img: Robotic,
    summary:
      "Software that drives a robotic arm with real precision, from planned motion paths down to manual overrides when you want the wheel.",
    link: "https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm",
    github: "https://github.com/kennethcxv/Enabling-Precision-Control-Robotic-Arm",
  },
  {
    title: "Pulse Tactical Warfare",
    type: "Game Dev",
    img: Pulse,
    summary:
      "An FPS I built with battle royale, team multiplayer, and a zombies mode. You can also just play solo against bots.",
    link: "https://github.com/kennethcxv/Pulse-Tactical-Warfare",
    github: "https://github.com/kennethcxv/Pulse-Tactical-Warfare",
  },
];

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[100.5%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          unoptimized
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold dark:text-light sm:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10"
            aria-label={`${title} on GitHub`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, summary, link, github }) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          unoptimized
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <p className="mb-2 text-sm font-medium text-dark/75 dark:text-light/75">{summary}</p>
        <div className="mt-2 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 md:w-6"
            aria-label={`${title} on GitHub`}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | Projects</title>
        <meta
          name="description"
          content="Projects by Kenneth Camacho: a Raft-based distributed key-value store, a distributed job queue, a semantic code search engine, and full-stack and AI applications built with Go, Python, React, and Node.js."
        />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center font-normal dark:text-light">
        <Layout className="items-center pt-12 font-normal">
          <h1 className="mb-24 w-full text-center text-6xl font-bold text-dark dark:text-light lg:text-5xl md:mb-16 sm:text-4xl xs:text-3xl">
            Systems I&apos;ve Built
          </h1>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {FEATURED_PROJECTS.map((project, index) => (
              <React.Fragment key={project.title}>
                <div className="col-span-12">
                  <FeaturedProject {...project} />
                </div>
                {PROJECTS.slice(index * 4, index * 4 + 4).map((item) => (
                  <div key={item.title} className="col-span-6 sm:col-span-12">
                    <Project {...item} />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
