import { useEffect, useState } from "react";

const PREFERS_DARK_QUERY = "(prefers-color-scheme: dark)";

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};

const readStoredTheme = () => {
  try {
    return window.localStorage.getItem("theme");
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    window.localStorage.setItem("theme", theme);
  } catch {
    // Storage can be unavailable in private browsing; theme still applies for the session.
  }
};

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(PREFERS_DARK_QUERY);

    const initialTheme =
      readStoredTheme() ?? (mediaQuery.matches ? "dark" : "light");
    setMode(initialTheme);
    applyTheme(initialTheme);

    // Follow OS-level changes only while the user has not made an explicit choice.
    const handleSystemChange = (event) => {
      if (!readStoredTheme()) {
        const next = event.matches ? "dark" : "light";
        setMode(next);
        applyTheme(next);
      }
    };

    // Keep multiple open tabs in sync.
    const handleStorage = (event) => {
      if (event.key === "theme" && (event.newValue === "dark" || event.newValue === "light")) {
        setMode(event.newValue);
        applyTheme(event.newValue);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    window.addEventListener("storage", handleStorage);
    return () => {
      mediaQuery.removeEventListener("change", handleSystemChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    if (mode !== "dark" && mode !== "light") return;
    storeTheme(mode);
    applyTheme(mode);
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
