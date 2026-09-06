import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/**
 * Every number on this page comes straight off the resume. Each entry pairs the
 * measurement with how it was actually obtained, so the figure can be defended
 * in an interview rather than just admired.
 */
const SECTIONS = [
  {
    heading: "Systems & Performance",
    context: "NVIDIA · Systems Software Engineer Intern · Sep 2026 – Present",
    metrics: [
      {
        value: 18,
        unit: "%",
        direction: "down",
        label: "p95 execution latency",
        detail:
          "Profiled CPU hotspots, eliminated unnecessary memory copies, and tightened critical-path code across C++ systems components for NVIDIA DRIVE.",
      },
      {
        value: 21,
        unit: "%",
        direction: "up",
        label: "throughput",
        detail:
          "Linux-based tooling and runtime support for performance-sensitive automotive workloads, measured in internal benchmark scenarios.",
      },
      {
        value: 12,
        unit: "%",
        direction: "down",
        label: "CPU utilization",
        detail:
          "Same runtime and tooling work, freeing headroom on hardware where every cycle is budgeted.",
      },
      {
        value: 30,
        unit: "%",
        direction: "down",
        label: "debugging time",
        detail:
          "Tracing, diagnostics, and automated stress tests across a multi-process stack, catching concurrency and reliability regressions before integration.",
      },
    ],
  },
  {
    heading: "Product & Platform",
    context: "Rubrik · May 2026 – Aug 2026  ·  Chime · May 2025 – Dec 2025",
    metrics: [
      {
        value: 30,
        unit: "%",
        direction: "down",
        label: "p95 page load",
        source: "Rubrik",
        detail:
          "Code-splitting, React Suspense, and targeted render-path optimization on cloud-security alert triage and backup monitoring across multi-cluster environments.",
      },
      {
        value: 50,
        unit: "%",
        direction: "down",
        label: "duplicated request logic",
        source: "Rubrik",
        detail:
          "Refactored GraphQL/Apollo data access across 4 production dashboards into shared hooks with normalized caching, fixing cross-view consistency issues along the way.",
      },
      {
        value: 20,
        unit: "%",
        direction: "down",
        label: "p95 latency",
        source: "Chime",
        detail:
          "PostgreSQL query-plan tuning with EXPLAIN ANALYZE and partial indexes, plus Kubernetes HPA scaling, on a payment microservice moving $1.2M+ a month.",
      },
      {
        value: 40,
        unit: "%",
        direction: "down",
        label: "incident MTTR",
        source: "Chime",
        detail:
          "Structured logging, OpenTelemetry tracing spans, and Grafana SLO dashboards on the customer-facing checkout path, measured across launch week.",
      },
      {
        value: 85,
        unit: "%",
        direction: "up",
        label: "test coverage",
        source: "Chime",
        detail:
          "Jest suites shipped alongside GraphQL/REST contracts and PostgreSQL schemas consumed by 3 internal teams.",
      },
    ],
  },
  {
    heading: "Systems I Built",
    context: "Personal projects · Go, Python, Docker, Linux",
    metrics: [
      {
        value: 10,
        display: "10k",
        unit: "/sec",
        label: "writes sustained",
        source: "Raft key-value store",
        detail:
          "Raft consensus written from scratch in Go over RocksDB-backed LSM storage with MVCC versioning, holding strong consistency on 1M+ entries under simulated network partitions.",
      },
      {
        value: 10,
        display: "10k",
        unit: "/hr",
        label: "tasks processed",
        source: "Distributed job queue",
        detail:
          "Five worker nodes with priority scheduling, token-bucket rate limiting, retries, and a dead-letter queue, instrumented with Prometheus and Grafana alerting on stuck workers.",
      },
      {
        value: 40,
        unit: "%",
        direction: "down",
        label: "irrelevant top-k results",
        source: "Semantic code search",
        detail:
          "Hybrid BM25 keyword retrieval combined with code embeddings in PostgreSQL/pgvector over a 500k-line codebase, scored against a vector-only baseline on a hand-labeled set.",
      },
      {
        value: 35,
        unit: "%",
        direction: "down",
        label: "p95 query latency",
        source: "Semantic code search",
        detail:
          "A Redis-cached embedding layer under load, validated by an offline harness scoring recall@k and MRR on a labeled query set.",
      },
    ],
  },
];

/** Counts up to `value` the first time the card scrolls into view. */
const AnimatedNumber = ({ value, display }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (!ref.current) return;
      const capped = Math.min(Number(latest.toFixed(0)), value);
      ref.current.textContent = display
        ? display.replace(String(value), String(capped))
        : String(capped);
    });
    return unsubscribe;
  }, [springValue, value, display]);

  return <span ref={ref}>0</span>;
};

const Arrow = ({ direction }) => (
  <span
    aria-hidden="true"
    className="ml-1 inline-block align-middle text-3xl leading-none md:text-2xl"
  >
    {direction === "up" ? "↑" : "↓"}
  </span>
);

const MetricCard = ({ value, display, unit, direction, label, detail, source }) => (
  <motion.article
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, type: "spring" }}
    className="relative flex h-full flex-col items-start rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4"
  >
    <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 xs:h-[102%] xs:rounded-[1.5rem]" />

    <p className="flex items-baseline text-5xl font-bold text-primary dark:text-primaryDark lg:text-4xl xs:text-3xl">
      <AnimatedNumber value={value} display={display} />
      <span>{unit}</span>
      {direction ? <Arrow direction={direction} /> : null}
      <span className="sr-only">
        {direction === "up" ? " increase in " : direction ? " reduction in " : " "}
      </span>
    </p>

    <h3 className="mt-1 text-lg font-bold capitalize text-dark dark:text-light xs:text-base">
      {label}
    </h3>

    {source ? (
      <span className="mt-2 rounded-full bg-dark px-3 py-1 text-xs font-semibold uppercase tracking-wide text-light dark:bg-light dark:text-dark">
        {source}
      </span>
    ) : null}

    <p className="mt-3 font-medium text-dark/75 dark:text-light/75 sm:text-sm">
      {detail}
    </p>
  </motion.article>
);

const Impact = () => {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | Impact</title>
        <meta
          name="description"
          content="Measured results from Kenneth Camacho's work: 18% lower p95 execution latency and 21% higher throughput on NVIDIA DRIVE, 30% faster page loads at Rubrik, 40% lower incident MTTR at Chime, and benchmarked distributed systems in Go."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1 className="mb-4 w-full text-center text-6xl font-bold text-dark dark:text-light lg:text-5xl sm:text-4xl xs:text-3xl">
            Measured, Not Claimed
          </h1>
          <p className="mx-auto mb-16 max-w-3xl text-center text-lg font-medium text-dark/75 dark:text-light/75 sm:mb-10 sm:text-base">
            Every number here came from a profiler, a benchmark, or a dashboard,
            and each one is paired with how it was obtained. Benchmarks over
            hunches, tests over hope.
          </p>

          {SECTIONS.map((section) => (
            <section key={section.heading} className="mb-24 w-full last:mb-0 md:mb-16">
              <h2 className="text-4xl font-bold text-dark dark:text-light md:text-3xl xs:text-2xl">
                {section.heading}
              </h2>
              <p className="mt-1 mb-8 font-medium text-primary dark:text-primaryDark sm:text-sm">
                {section.context}
              </p>
              <ul className="grid w-full grid-cols-2 gap-8 sm:grid-cols-1 sm:gap-6">
                {section.metrics.map((metric) => (
                  <li key={`${section.heading}-${metric.label}-${metric.source ?? ""}`}>
                    <MetricCard {...metric} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <div className="mt-8 flex w-full items-center justify-center gap-6 sm:gap-4">
            <Link
              href="/projects"
              className="rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-colors hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
            >
              See the projects
            </Link>
            <a
              href="/Kenneth_Camacho_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-solid border-dark p-2.5 px-6 text-lg font-semibold text-dark transition-colors hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark md:p-2 md:px-4 md:text-base"
            >
              Resume
            </a>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Impact;
