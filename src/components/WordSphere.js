import React, { useEffect, useMemo, useRef } from "react";

const SPEED = 0.003; // constant rad/frame; the sphere never speeds up or slows down
const STEER_EASE = 0.035; // how quickly the spin axis eases toward the pointer
const DEADZONE = 24; // px around the sphere center where direction holds steady
const BASE_ANGLE = Math.atan2(0.0024, 0.0016); // idle spin direction (diagonal drift)

/**
 * Self-hosted rotating 3D tag sphere.
 *
 * Replaces the TagCloud script that was previously loaded from a third-party
 * CDN at runtime (a supply-chain risk and an extra network request). Points
 * are laid out with a Fibonacci sphere and rotated on a requestAnimationFrame
 * loop that writes transforms directly to the DOM, so React never re-renders
 * during the animation. The sphere always turns at one constant speed; the
 * pointer (tracked window-wide) only steers the spin direction, eased along
 * the shortest arc so changes feel fluid. The loop pauses only while the tab
 * is hidden.
 */
const WordSphere = ({ tags, className = "" }) => {
  const containerRef = useRef(null);
  const spanRefs = useRef([]);

  // Evenly distribute unit vectors with a Fibonacci sphere.
  const initialPoints = useMemo(() => {
    const count = tags.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return tags.map((_, i) => {
      const y = count === 1 ? 0 : 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = goldenAngle * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  }, [tags]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const points = initialPoints.map((p) => ({ ...p }));
    let radius = 100;
    let rafId = null;
    let running = false;
    let angle = BASE_ANGLE; // current spin-axis direction
    let targetAngle = BASE_ANGLE; // direction the pointer is asking for

    const measure = () => {
      const rect = container.getBoundingClientRect();
      radius = (Math.min(rect.width, rect.height) / 2) * 0.82;
    };

    const project = () => {
      for (let i = 0; i < points.length; i += 1) {
        const span = spanRefs.current[i];
        if (!span) continue;
        const p = points[i];
        const depth = (p.z + 2) / 3; // 0.33 (back) → 1 (front)
        span.style.transform = `translate(-50%, -50%) translate3d(${(p.x * radius).toFixed(2)}px, ${(p.y * radius).toFixed(2)}px, 0) scale(${depth.toFixed(3)})`;
        span.style.opacity = (0.25 + 0.75 * depth).toFixed(3);
        span.style.zIndex = String(Math.round(depth * 100));
      }
    };

    const rotate = (angleX, angleY) => {
      const sinX = Math.sin(angleX);
      const cosX = Math.cos(angleX);
      const sinY = Math.sin(angleY);
      const cosY = Math.cos(angleY);
      for (const p of points) {
        // Rotate around X axis.
        const y1 = p.y * cosX - p.z * sinX;
        const z1 = p.y * sinX + p.z * cosX;
        // Rotate around Y axis.
        const x2 = p.x * cosY + z1 * sinY;
        const z2 = -p.x * sinY + z1 * cosY;
        p.x = x2;
        p.y = y1;
        p.z = z2;
      }
    };

    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const step = () => {
      if (!running) return;
      // Ease the spin axis toward the pointer along the shortest arc, keeping
      // the angular speed itself constant.
      let delta = targetAngle - angle;
      delta = Math.atan2(Math.sin(delta), Math.cos(delta));
      angle += delta * STEER_EASE;
      rotate(Math.cos(angle) * SPEED, Math.sin(angle) * SPEED);
      project();
      rafId = requestAnimationFrame(step);
    };

    const start = () => {
      if (!running && !document.hidden) {
        running = true;
        rafId = requestAnimationFrame(step);
      }
    };

    measure();
    project();
    start();

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      if (Math.hypot(dx, dy) < DEADZONE) return;
      // Spin toward the pointer: X-axis rotation from vertical offset,
      // Y-axis rotation from horizontal offset.
      targetAngle = Math.atan2(dx, -dy);
    };
    window.addEventListener("mousemove", onMouseMove);

    const resizeObserver = new ResizeObserver(() => {
      measure();
      project();
    });
    resizeObserver.observe(container);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
    };
  }, [initialPoints]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative aspect-square w-full max-w-[42rem] select-none ${className}`}
    >
      {tags.map((tag, i) => (
        <span
          key={tag}
          ref={(el) => {
            spanRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 whitespace-nowrap text-base font-semibold text-dark will-change-transform dark:text-light lg:text-sm sm:text-xs"
          style={{ opacity: 0 }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default WordSphere;
