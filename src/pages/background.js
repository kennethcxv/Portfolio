import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";

const Background = () => {
  return (
    <>
      <Head>
        <title>Kenneth Camacho | Background</title>
        <meta
          name="description"
          content="Kenneth Camacho's experience, awards, education, and skills: software engineering internships at Rubrik, Chime, EloStack, and Sebanda Insurance, an M.S. in Computer Science at Georgia Tech, hackathon wins, and founding Code Culture."
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <Experience />
          <Leadership />
          <Education />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default Background;
