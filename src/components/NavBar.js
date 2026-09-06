import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Logo from "./Logo";
import { GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NAV_LINKS = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/background", title: "Background" },
  { href: "/projects", title: "Projects" },
  { href: "/articles", title: "Articles" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/kennethcxv", label: "Kenneth Camacho on GitHub", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/kennethcxv/",
    label: "Kenneth Camacho on LinkedIn",
    Icon: LinkedInIcon,
  },
];

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} group relative`}
      aria-current={router.asPath === href ? "page" : undefined}
    >
      {title}
      <span
        className={`ease absolute left-0 -bottom-0.5 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} group relative my-2 text-light`}
      onClick={handleClick}
      aria-current={router.asPath === href ? "page" : undefined}
    >
      {title}
      <span
        className={`ease absolute left-0 -bottom-0.5 inline-block h-[1px] bg-light transition-[width] duration-300 group-hover:w-full ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const ThemeToggle = ({ mode, setMode, className = "" }) => (
  <button
    onClick={() => setMode(mode === "light" ? "dark" : "light")}
    aria-label={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
    className={`flex items-center justify-center rounded-full p-1 ${className} ${
      mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
    }`}
  >
    {mode === "dark" ? <SunIcon className="fill-dark" /> : <MoonIcon className="fill-dark" />}
  </button>
);

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen((open) => !open);
  }, []);

  // Close the mobile menu with Escape and lock page scroll while it is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <header className="relative z-10 flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden flex-col items-center justify-center lg:flex"
        onClick={handleClick}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out dark:bg-light ${
            isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav aria-label="Primary">
          {NAV_LINKS.map((link, index) => (
            <CustomLink
              key={link.href}
              {...link}
              className={index === 0 ? "mr-4" : index === NAV_LINKS.length - 1 ? "ml-4" : "mx-4"}
            />
          ))}
        </nav>

        <nav className="flex flex-wrap items-center justify-center" aria-label="Social">
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="mx-3 w-6"
            >
              <Icon />
            </motion.a>
          ))}
          <ThemeToggle mode={mode} setMode={setMode} className="ml-3" />
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-dark"
        >
          <button
            onClick={handleClick}
            aria-label="Close menu"
            className="absolute top-8 right-8 flex h-10 w-10 items-center justify-center text-light"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
              <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>

          <nav className="flex flex-col items-center justify-center" aria-label="Primary mobile">
            {NAV_LINKS.map((link) => (
              <CustomMobileLink key={link.href} {...link} toggle={handleClick} />
            ))}
          </nav>

          <nav className="mt-6 flex flex-wrap items-center justify-center" aria-label="Social mobile">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="mx-3 w-6 text-light sm:mx-1"
              >
                <Icon />
              </motion.a>
            ))}
            <ThemeToggle mode={mode} setMode={setMode} className="ml-3 !bg-light !text-dark sm:mx-1" />
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
