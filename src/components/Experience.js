import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const EXPERIENCE = [
  {
    position: "Systems Software Engineer Intern",
    company: "NVIDIA",
    companyLink: "https://www.nvidia.com/en-us/self-driving-cars/",
    time: "Sep 2026 – Present",
    address: "Santa Clara, CA",
    work: "Building and optimizing C++ systems components for NVIDIA DRIVE, cutting p95 execution latency 18% by profiling CPU hotspots, eliminating unnecessary memory copies, and tightening critical-path code. Developed Linux-based tooling and runtime support for performance-sensitive automotive workloads, reducing CPU utilization 12% and improving throughput 21% in internal benchmark scenarios. Added tracing, diagnostics, and automated stress tests across a multi-process software stack, shortening debugging time ~30% and catching concurrency and reliability regressions before integration.",
  },
  {
    position: "Software Engineer Intern",
    company: "Rubrik",
    companyLink: "https://www.rubrik.com/",
    time: "May 2026 – Aug 2026",
    address: "Palo Alto, CA",
    work: "Built and optimized React/TypeScript workflows for cloud-security alert triage and backup monitoring across multi-cluster environments, cutting p95 page-load latency 30% through code-splitting, React Suspense, and targeted render-path optimization. Refactored GraphQL/Apollo data access across 4 production dashboards into shared hooks and normalized caching, eliminating ~50% of duplicated request logic and fixing cross-view consistency issues affecting customer-facing security and backup workflows.",
  },
  {
    position: "Software Engineer Intern",
    company: "Chime",
    companyLink: "https://www.chime.com/",
    time: "May 2025 – Dec 2025",
    address: "San Francisco, CA",
    work: "Shipped TypeScript/Node.js features in a payment microservice processing $1.2M+ in monthly transaction volume, cutting p95 latency 20% through PostgreSQL query-plan tuning (EXPLAIN ANALYZE, partial indexes) and Kubernetes HPA scaling. Designed GraphQL/REST contracts and PostgreSQL schemas for a payments service consumed by 3 internal teams, authored the design doc, drove the backward-compatibility review, and shipped Jest tests to 85% coverage. Cut launch-week payment incident MTTR ~40% by adding structured logging, OpenTelemetry tracing spans, and Grafana SLO dashboards on the customer-facing checkout path.",
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
