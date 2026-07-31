import Layout from "@/components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/UpperHalf.png";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const Stat = ({ value, suffix = "+", label }) => (
  <div className="flex flex-col items-end justify-center xl:items-center">
    <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
      <AnimatedNumbers value={value} />
      {suffix}
    </span>
    <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
      {label}
    </h2>
  </div>
);

const About = () => {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | About</title>
        <meta
          name="description"
          content="About Kenneth Camacho, an M.S. Computer Science student at Georgia Tech with a B.S. summa cum laude from Florida State University and software engineering experience at Rubrik, Chime, EloStack, and Sebanda Insurance."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h1 className="mb-16 w-full text-center text-6xl font-bold text-dark dark:text-light lg:text-5xl sm:mb-8 sm:text-4xl xs:text-3xl">
            Building Software That Scales
          </h1>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                I&apos;m Kenneth Camacho, a software engineer pursuing an M.S.
                in Computer Science at Georgia Tech with a specialization in
                Computing Systems. I earned my B.S. in Computer Science from
                Florida State University summa cum laude, making the Dean&apos;s
                List every semester. My work sits where backend engineering
                meets distributed systems: designing services that stay fast,
                consistent, and observable under real load.
              </p>
              <p className="my-4 font-medium">
                At Rubrik, I build React/TypeScript dashboards for
                cloud-security alert triage and backup monitoring across
                multi-cluster deployments. Before that, at Chime, I shipped
                TypeScript/Node.js features in a payment microservice handling
                $1.2M+ in monthly transactions. That meant tuning PostgreSQL
                query plans, designing GraphQL and REST contracts used by three
                internal teams, and cutting incident response time about 40%
                with OpenTelemetry tracing and Grafana SLO dashboards.
              </p>
              <p className="font-medium">
                Outside of work, I build distributed systems from first
                principles in Go: a Raft-based key-value store, a
                fault-tolerant job queue, and a semantic code search engine
                over PostgreSQL/pgvector. I also founded Code Culture, a
                4,500+ member programming community where I&apos;ve led 8
                hackathons and mentored 200+ students.
              </p>
              <br />
              <p className="font-medium">
                I care about software that&apos;s measured before it&apos;s
                celebrated: benchmarks over hunches, tests over hope, and
                dashboards over guesswork. If you&apos;re building something
                ambitious, I&apos;d love to hear about it.
              </p>
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Portrait of Kenneth Camacho"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <Stat value={4500} label="Community Members" />
              <Stat value={200} label="Students Mentored" />
              <Stat value={4} label="Internships" suffix="" />
              <Stat value={3} suffix="x" label="Hackathon Winner" />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;
