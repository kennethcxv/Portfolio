import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EXPERIENCE = [
  {
    position: "Software Engineer Intern",
    company: "Rubrik",
    companyLink: "https://www.rubrik.com/",
    time: "May 2026 – Present",
    address: "Palo Alto, CA",
    work: "Building React/TypeScript dashboard views for cloud-security alert triage and backup monitoring across multi-cluster deployments, cutting p95 load time 30% with React Suspense, code-splitting, and selective memoization. Refactored GraphQL/Apollo logic across 4 dashboards into shared hooks with normalized caching, which removed roughly half of the duplicated request code and fixed customer-reported cross-view consistency bugs.",
  },
  {
    position: "Software Engineer Intern",
    company: "Chime",
    companyLink: "https://www.chime.com/",
    time: "May 2025 – Dec 2025",
    address: "San Francisco, CA",
    work: "Shipped TypeScript/Node.js features in a payment microservice processing $1.2M+ in monthly transaction volume, cutting p95 latency 20% through PostgreSQL query-plan tuning and Kubernetes autoscaling. Designed GraphQL/REST contracts and PostgreSQL schemas consumed by 3 internal teams, drove the backward-compatibility review, and shipped Jest tests to 85% coverage. Cut launch-week incident MTTR ~40% by adding structured logging, OpenTelemetry tracing, and Grafana SLO dashboards on the checkout path.",
  },
  {
    position: "Software Engineer Intern",
    company: "EloStack",
    companyLink: "https://www.elostack.com/",
    time: "May 2024 – Aug 2024",
    address: "Miami, FL",
    work: "Cut initial render time 40% on core React workflows through React Profiler analysis, eliminating redundant API calls and applying React.memo and useMemo on hot-path components. Owned React/Node.js features across user onboarding and dashboards in releases tied to a 25% retention lift, reviewed REST API pull requests, and authored shared frontend patterns adopted org-wide.",
  },
  {
    position: "Software Engineer Intern",
    company: "Sebanda Insurance",
    companyLink: "https://www.sebandainsurance.com/",
    time: "Jan 2024 – Apr 2024",
    address: "Miami, FL",
    work: "Built a Python/Pandas reporting tool over PostgreSQL views that automated weekly financial reconciliation, saving the finance team about 5 hours a week and cutting data-entry errors 20%.",
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
            className="capitalize text-primary dark:text-primaryDark"
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

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div>
      <h2 className="mb-32 w-full text-center text-8xl font-bold md:mb-16 md:text-6xl xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%] lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light md:left-[30px] md:w-[2px] xs:left-[20px]"
          aria-hidden="true"
        />
        <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
          {EXPERIENCE.map((job) => (
            <Details key={`${job.company}-${job.time}`} {...job} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
