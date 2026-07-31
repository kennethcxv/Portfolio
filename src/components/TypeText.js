import React, { useEffect, useRef, useState } from "react";

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 1800;

/**
 * Lightweight looping typewriter. Replaces the `typewriter-effect`
 * dependency and renders the first string statically for users who
 * prefer reduced motion.
 */
const TypeText = ({ strings, className = "" }) => {
  const [text, setText] = useState("");
  const [reduceMotion, setReduceMotion] = useState(false);
  const state = useRef({ index: 0, length: 0, deleting: false });

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const onChange = (event) => setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || strings.length === 0) return;

    let timer;
    const tick = () => {
      const current = state.current;
      const target = strings[current.index % strings.length];

      if (current.deleting) {
        current.length -= 1;
        if (current.length <= 0) {
          current.deleting = false;
          current.index += 1;
        }
      } else {
        current.length += 1;
        if (current.length >= target.length) {
          current.deleting = true;
          setText(target);
          timer = setTimeout(tick, HOLD_MS);
          return;
        }
      }

      setText(strings[current.index % strings.length].slice(0, current.length));
      timer = setTimeout(tick, current.deleting ? DELETE_MS : TYPE_MS);
    };

    timer = setTimeout(tick, TYPE_MS);
    return () => clearTimeout(timer);
  }, [strings, reduceMotion]);

  const display = reduceMotion ? strings[0] ?? "" : text;

  return (
    <span className={className} aria-label={strings[0] ?? ""}>
      <span aria-hidden="true">{display}</span>
      {!reduceMotion && (
        <span className="type-cursor text-primary dark:text-primaryDark" aria-hidden="true">
          |
        </span>
      )}
    </span>
  );
};

export default TypeText;
