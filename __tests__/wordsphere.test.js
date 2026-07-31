import { render, act, fireEvent } from "@testing-library/react";
import WordSphere from "@/components/WordSphere";

const TAGS = ["React", "Go", "Python", "SQL", "Redis", "Kafka"];

const getTransforms = (container) =>
  Array.from(container.querySelectorAll("span")).map((s) => s.style.transform);

const mockReducedMotion = (matches) => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes("prefers-reduced-motion") ? matches : false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
};

const advanceFrames = (ms) => {
  act(() => {
    jest.advanceTimersByTime(ms);
  });
};

describe("WordSphere", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders every tag", () => {
    mockReducedMotion(false);
    const { container } = render(<WordSphere tags={TAGS} />);
    for (const tag of TAGS) {
      expect(container).toHaveTextContent(tag);
    }
  });

  it("spins on its own without any pointer input", () => {
    mockReducedMotion(false);
    const { container } = render(<WordSphere tags={TAGS} />);
    const before = getTransforms(container);
    advanceFrames(500);
    expect(getTransforms(container)).not.toEqual(before);
  });

  it("spins even when the OS prefers reduced motion", () => {
    mockReducedMotion(true);
    const { container } = render(<WordSphere tags={TAGS} />);
    const before = getTransforms(container);
    advanceFrames(500);
    expect(getTransforms(container)).not.toEqual(before);
  });

  it("keeps spinning while the pointer steers it", () => {
    mockReducedMotion(false);
    const { container } = render(<WordSphere tags={TAGS} />);
    fireEvent.mouseMove(window, { clientX: 500, clientY: 80 });
    advanceFrames(300);
    const mid = getTransforms(container);
    fireEvent.mouseMove(window, { clientX: 40, clientY: 400 });
    advanceFrames(300);
    expect(getTransforms(container)).not.toEqual(mid);
  });
});
