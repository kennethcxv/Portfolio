import "@testing-library/jest-dom";

// Pages and NavBar read the router; provide a minimal one for component tests.
jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
    pathname: "/",
    push: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    events: { on: jest.fn(), off: jest.fn() },
  }),
}));

// jsdom does not implement these browser APIs used by the site and framer-motion.
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = window.ResizeObserver || MockObserver;
window.IntersectionObserver = window.IntersectionObserver || MockObserver;

window.requestAnimationFrame = window.requestAnimationFrame || ((cb) => setTimeout(cb, 16));
window.cancelAnimationFrame = window.cancelAnimationFrame || ((id) => clearTimeout(id));
