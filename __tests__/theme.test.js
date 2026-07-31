import { render, screen, fireEvent, act } from "@testing-library/react";
import useThemeSwitcher from "@/components/hooks/useThemeSwitcher";

const Probe = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <button onClick={() => setMode(mode === "light" ? "dark" : "light")}>mode:{mode}</button>
  );
};

describe("useThemeSwitcher", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  it("defaults to light when the OS has no dark preference", () => {
    render(<Probe />);
    expect(screen.getByText("mode:light")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("honors a stored dark preference", () => {
    window.localStorage.setItem("theme", "dark");
    render(<Probe />);
    expect(screen.getByText("mode:dark")).toBeInTheDocument();
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles the dark class and persists the choice", () => {
    render(<Probe />);
    act(() => {
      fireEvent.click(screen.getByRole("button"));
    });
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("theme")).toBe("dark");
  });
});
