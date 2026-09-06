import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const HIGHLIGHTS = [
  {
    position: "Founder",
    company: "Code Culture",
    companyLink: "https://discord.gg/code-culture",
    time: "Aug 2022 – Present",
    address: "Miami, FL",
    work: "Founded and lead a 4,500+ member student programming community. Organized 8 hackathons and 15+ workshops covering algorithms, systems, web development, and machine learning, and mentored 200+ students on projects and interview preparation.",
  },
  {
    position: "1st Place",
    company: "eMerge Americas Hackathon",
    companyLink: "https://emergeamericas.com/",
    time: "University of Miami",
    address: "Miami, FL",
    work: "Built a real-time fraud-detection prototype with Kafka, Python, and a gradient-boosted classifier, benchmarking anomaly detection on 100K simulated transactions.",
  },
  {
    position: "1st Place",
    company: "NextEra Energy Hackathon",
    companyLink: "https://www.nexteraenergy.com/",
    time: "Florida State University",
    address: "Tallahassee, FL",
    work: "Trained a 24-hour solar generation forecasting model, an LSTM with weather and seasonality features, that cut MAPE 18% versus a persistence baseline on NextEra's public dataset.",
  },
  {
    position: "1st Place",
    company: "Pluto Hacks",
    companyLink: "https://github.com/kennethcxv",
    time: "Hackathon",
    address: "Florida",
    work: "Created an in-browser Python and JavaScript coding playground powered by WebAssembly, with real-time collaborative editing built on Yjs CRDTs.",
  },
  {
    position: "2nd Place",
    company: "Knight Hacks",
    companyLink: "https://www.knighthacks.org/",
    time: "University of Central Florida",
    address: "Orlando, FL",
    work: "Built a Chrome extension that captions and summarizes online lectures using Whisper and a large language model, helping students review 30-minute lectures in a fraction of the time.",
  },
];

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full"
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Leadership = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Awards &amp; Leadership
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
          aria-hidden="true"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          {HIGHLIGHTS.map((item) => (
            <Details key={`${item.company}-${item.position}`} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leadership;
