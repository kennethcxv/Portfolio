import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium dark:border-light dark:text-light sm:text-base">
      <Layout className="flex items-center justify-between !py-8 lg:flex-col lg:!py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center lg:py-2">
          Built by&nbsp;<p className="font-semibold">Kenneth Camacho</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/kennethcxv"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kennethcxv/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-2 hover:underline"
          >
            LinkedIn
          </a>
          <Link
            href="mailto:kenneth.camacho.swe@gmail.com"
            className="underline-offset-2 hover:underline"
          >
            Say Hello
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
