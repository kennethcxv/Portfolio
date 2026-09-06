import Head from "next/head";
import TypeText from "@/components/TypeText";
import WordSphere from "@/components/WordSphere";
import { LinkArrow } from "@/components/Icons";

const SPHERE_TAGS = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Go",
  "Java",
  "C++",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "FastAPI",
  "GraphQL",
  "gRPC",
  "REST APIs",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "RocksDB",
  "Kafka",
  "AWS",
  "Docker",
  "Kubernetes",
  "Linux",
  "Prometheus",
  "Grafana",
  "Bazel",
  "Tailwind CSS",
  "Git",
  "Distributed Systems",
];

const HEADLINES = [
  "Welcome to my Portfolio!",
  "Systems Software Engineer.",
  "Distributed Systems Builder.",
  "Full-Stack Developer.",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | Software Engineer</title>
        <meta
          name="description"
          content="Kenneth Camacho is a systems software engineer and M.S. Computer Science student at Georgia Tech, currently a Systems Software Engineering Intern at NVIDIA working on NVIDIA DRIVE. Prior experience at Rubrik and Chime; builds distributed systems in Go and performance-critical C++ on Linux."
        />
      </Head>

      <main className="flex w-full items-center justify-center bg-light dark:bg-dark">
        <div className="flex min-h-[calc(100vh-11rem)] w-full items-center justify-between gap-12 px-32 py-8 xl:px-24 lg:min-h-0 lg:flex-col lg:gap-8 lg:px-16 lg:py-12 md:px-12 sm:px-8">
          {/* Rotating skills sphere */}
          <div className="flex w-1/2 items-center justify-center lg:order-2 lg:w-full">
            <WordSphere tags={SPHERE_TAGS} className="lg:max-w-[26rem] sm:max-w-[19rem]" />
          </div>

          {/* Intro */}
          <div className="flex w-1/2 flex-col items-start lg:order-1 lg:w-full lg:items-center lg:text-center">
            <h1 className="min-h-[2.6em] w-full text-5xl font-bold text-dark dark:text-light 2xl:text-4xl xl:text-4xl md:text-3xl sm:text-2xl">
              <TypeText strings={HEADLINES} />
            </h1>

            <p className="my-6 text-lg font-medium text-dark dark:text-light xl:text-base md:my-4 sm:text-sm">
              I&apos;m Kenneth Camacho, a software engineer and M.S. Computer
              Science student at Georgia Tech. Right now I&apos;m a systems
              software engineering intern at NVIDIA, writing C++ and Linux
              tooling for NVIDIA DRIVE. Before that I shipped production code
              at Rubrik and Chime. On my own time I build distributed systems
              in Go.
            </p>

            <div className="mt-2 flex items-center gap-6 self-start lg:self-center sm:gap-4">
              <a
                href="/Kenneth_Camacho_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-colors hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
              >
                Resume
                <LinkArrow className="ml-1 w-6 md:w-5" />
              </a>
              <a
                href="mailto:kenneth.camacho.swe@gmail.com"
                className="flex items-center rounded-lg border-2 border-solid border-transparent bg-dark p-2.5 px-6 text-lg font-semibold text-light transition-colors hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
