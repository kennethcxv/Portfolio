import React from "react";
import { motion } from "framer-motion";

const ORBIT_SKILLS = [
  { name: "React", x: "0vw", y: "-8vw" },
  { name: "Node.js", x: "0vw", y: "8vw" },
  { name: "TypeScript", x: "-11vw", y: "0vw" },
  { name: "Go", x: "11vw", y: "0vw" },
  { name: "Python", x: "-9vw", y: "-12vw" },
  { name: "Next.js", x: "9vw", y: "-12vw" },
  { name: "PostgreSQL", x: "-9vw", y: "12vw" },
  { name: "GraphQL", x: "9vw", y: "12vw" },
  { name: "Docker", x: "-21vw", y: "-6vw" },
  { name: "Kubernetes", x: "21vw", y: "-6vw" },
  { name: "Redis", x: "-21vw", y: "6vw" },
  { name: "AWS", x: "21vw", y: "6vw" },
  { name: "Kafka", x: "0vw", y: "-16vw" },
  { name: "SQL", x: "0vw", y: "16vw" },
  { name: "Prometheus", x: "-17vw", y: "-16vw" },
  { name: "Grafana", x: "17vw", y: "-16vw" },
  { name: "Java", x: "-17vw", y: "16vw" },
  { name: "C++", x: "17vw", y: "16vw" },
];

const ALL_SKILLS = [
  ...ORBIT_SKILLS.map((skill) => skill.name),
  "gRPC",
  "FastAPI",
  "Express",
  "Kafka Streams",
  "Linux",
  "Git",
  "CI/CD",
  "Tailwind CSS",
];

const Skill = ({ name, x, y }) => (
  <motion.div
    className="absolute flex cursor-default items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:bg-light dark:text-dark lg:px-4 lg:py-2 lg:text-sm"
    whileHover={{ scale: 1.05 }}
    initial={{ x: 0, y: 0 }}
    whileInView={{ x, y, transition: { duration: 1.5 } }}
    viewport={{ once: true }}
  >
    {name}
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold md:mt-32 md:text-6xl xs:text-4xl">
        Skills
      </h2>

      {/* Orbital layout on larger screens */}
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:hidden">
        <motion.div
          className="flex cursor-default items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark dark:bg-light dark:text-dark lg:p-6"
          whileHover={{ scale: 1.05 }}
        >
          Full-Stack
        </motion.div>
        {ORBIT_SKILLS.map((skill) => (
          <Skill key={skill.name} {...skill} />
        ))}
      </div>

      {/* Wrapping pill grid on small screens, where the orbit can't fit */}
      <ul className="mt-16 hidden w-full flex-wrap items-center justify-center gap-3 md:flex">
        {ALL_SKILLS.map((name) => (
          <li
            key={name}
            className="rounded-full bg-dark px-4 py-2 text-sm font-semibold text-light dark:bg-light dark:text-dark xs:px-3 xs:py-1.5 xs:text-xs"
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
