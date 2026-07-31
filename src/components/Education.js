import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EDUCATION = [
  {
    label: "M.S. Computer Science",
    school: "Georgia Institute of Technology",
    link: "https://www.gatech.edu/",
    time: "Expected Jun 2027 | Atlanta, GA",
    info: "Specializing in Computing Systems with a 3.9/4.0 GPA. Coursework spans Distributed Systems, Advanced Operating Systems, and Database Internals, which is the theory behind the consensus protocols, storage engines, and schedulers I build in my own projects.",
  },
  {
    label: "Bachelors in Computer Science",
    school: "Florida State University",
    link: "https://www.fsu.edu/",
    time: "Graduated Dec 2025 | Tallahassee, FL",
    info: "Graduated summa cum laude with a 3.8/4.0 GPA, earning Dean's List honors every semester. Coursework included Operating Systems, Compilers, Algorithms, Networks, and Computer Architecture. Founded Code Culture, FSU's largest student programming community, along the way.",
  },
];

const Details = ({ label, school, link, time, info }) => {
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
          <span className="text-dark dark:text-light">{label}</span>{" "}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark"
          >
            @{school}
          </a>
        </h3>
        <span className="font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}
        </span>
        <p className="w-full font-medium md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Education
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
          aria-hidden="true"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          {EDUCATION.map((entry) => (
            <Details key={entry.school} {...entry} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
