import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import article1 from "../../public/images/articles/BlackBoxML.svg";
import article2 from "../../public/images/articles/DeepLearningCNN.svg";
import article3 from "../../public/images/articles/MLCybersecurity.svg";
import article4 from "../../public/images/articles/HumanCenteredDesign.svg";
import article5 from "../../public/images/articles/DigitalDivide.svg";
import article6 from "../../public/images/articles/AIIntegration.svg";
import article7 from "../../public/images/articles/HarnessingAI.svg";
import article8 from "../../public/images/articles/EthicalAI.svg";
import article9 from "../../public/images/articles/AIRenaissance.svg";
import article10 from "../../public/images/articles/AISocialImpact.svg";
import article11 from "../../public/images/articles/AIDemocratization.svg";

const FEATURED_ARTICLES = [
  {
    title: "Unraveling the Black Box: Demystifying Machine Learning for the Everyday User",
    summary:
      "Machine learning sounds like magic until someone opens the box for you. This piece walks through supervised, unsupervised, and reinforcement learning in plain language, then points out where you already bump into them every day: spam filters, product recommendations, translation, even your thermostat. No math degree required, promise.",
    time: "9 min read",
    link: "https://KennethCamachoblog.blogspot.com/2023/04/unraveling-black-box-demystifying.html",
    img: article1,
  },
  {
    title: "The Power of Deep Learning",
    summary:
      "Why did deep learning take over image recognition? Because convolutional networks stack simple ideas into deep ones, learning edges first, then textures, then whole objects. This article walks through how that happens and why the same trick now shows up in medical imaging, augmented reality, retail shelves, and farm fields.",
    time: "11 min read",
    link: "https://KennethCamachoblog.blogspot.com/2023/04/the-power-of-deep-learning.html",
    img: article2,
  },
];

const ALL_ARTICLES = [
  {
    title: "Unraveling the Black Box: Demystifying Machine Learning for the Everyday User",
    date: "April 23, 2023",
    link: "https://KennethCamachoblog.blogspot.com/2023/04/unraveling-black-box-demystifying.html",
    img: article1,
  },
  {
    title: "The Power of Deep Learning",
    date: "March 7, 2023",
    link: "https://KennethCamachoblog.blogspot.com/2023/04/the-power-of-deep-learning.html",
    img: article2,
  },
  {
    title: "Leveraging Machine Learning to Combat the Cybersecurity Crisis",
    date: "February 13, 2023",
    link: "https://KennethCamachoblog.blogspot.com/2023/02/leveraging-machine-learning-to-combat.html",
    img: article3,
  },
  {
    title: "Enhancing User Experience with Human-Centered Design in Computer Science",
    date: "January 10, 2023",
    link: "https://KennethCamachoblog.blogspot.com/2023/01/enhancing-user-experience-with-human.html",
    img: article4,
  },
  {
    title: "Bridging the Digital Divide: How Computer Science Can Foster Inclusive Technology Access",
    date: "December 5, 2022",
    link: "https://KennethCamachoblog.blogspot.com/2022/12/bridging-digital-divide-how-computer.html",
    img: article5,
  },
  {
    title: "Bridging the Gap: The Future of AI and Computer Science Integration",
    date: "November 9, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/11/bridging-gap-future-of-ai-and-computer.html",
    img: article6,
  },
  {
    title: "Harnessing the Power of AI: How Artificial Intelligence is Revolutionizing Computer Science",
    date: "October 21, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/10/harnessing-power-of-ai-how-artificial.html",
    img: article7,
  },
  {
    title: "Paving the Path for Ethical AI: Addressing Bias and Ensuring Fairness in Computer Science",
    date: "September 8, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/09/paving-path-for-ethical-ai-addressing.html",
    img: article8,
  },
  {
    title: "The AI Renaissance: Unleashing the Creative Potential of Artificial Intelligence in Computer Science",
    date: "August 22, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/08/the-ai-renaissance-unleashing-creative.html",
    img: article9,
  },
  {
    title: "Empowering Human Progress: Exploring the Social Impact of Artificial Intelligence in Computer Science",
    date: "July 18, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/07/empowering-human-progress-exploring.html",
    img: article10,
  },
  {
    title: "The Democratization of AI: Bridging the Digital Divide in Computer Science",
    date: "June 19, 2022",
    link: "https://kennethcamachoblog.blogspot.com/2022/06/the-democratization-of-ai-bridging.html",
    img: article11,
  },
];

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    if (!window.matchMedia("(hover: hover)").matches) return;
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">{title}</h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt=""
        unoptimized
        className="absolute z-10 hidden h-auto w-96 rounded-lg md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative my-4 flex w-full items-center justify-between rounded-xl border border-r-4 border-b-4 border-solid border-dark bg-light p-4 py-6 text-dark first:mt-0 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[100.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          unoptimized
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">{time}</span>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | Articles</title>
        <meta
          name="description"
          content="Articles by Kenneth Camacho on machine learning, deep learning, cybersecurity, ethical AI, and human-centered design in computer science."
        />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <h1 className="mb-16 w-full text-center text-6xl font-bold text-dark dark:text-light lg:text-5xl sm:mb-8 sm:text-4xl xs:text-3xl">
            Words Can Change the World
          </h1>
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            {FEATURED_ARTICLES.map((article) => (
              <FeaturedArticle key={article.title} {...article} />
            ))}
          </ul>
          <h2 className="my-16 mt-32 w-full text-center text-4xl font-bold">All Articles</h2>
          <ul>
            {ALL_ARTICLES.map((article) => (
              <Article key={article.title} {...article} />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
