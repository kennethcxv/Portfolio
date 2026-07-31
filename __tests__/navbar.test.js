import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "@/components/NavBar";

describe("NavBar", () => {
  it("renders every page link", () => {
    render(<NavBar />);
    for (const title of ["Home", "About", "Background", "Projects", "Articles"]) {
      expect(screen.getByRole("link", { name: title })).toBeInTheDocument();
    }
  });

  it("links social icons safely with accessible names", () => {
    render(<NavBar />);
    const github = screen.getByRole("link", { name: /github/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(github).toHaveAttribute("href", "https://github.com/kennethcxv");
    expect(linkedin).toHaveAttribute("href", "https://www.linkedin.com/in/kennethcxv/");
    for (const link of [github, linkedin]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
      expect(link.getAttribute("rel")).toContain("noreferrer");
    }
  });

  it("labels the theme toggle", () => {
    render(<NavBar />);
    expect(screen.getByRole("button", { name: /switch to (dark|light) mode/i })).toBeInTheDocument();
  });

  it("opens the mobile menu with all five pages, including Background", () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    // The overlay renders page links as buttons.
    for (const title of ["Home", "About", "Background", "Projects", "Articles"]) {
      expect(screen.getByRole("button", { name: title })).toBeInTheDocument();
    }
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("closes the mobile menu from the X button", () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    // Both the morphed hamburger and the overlay X are labeled "Close menu";
    // the overlay X is rendered last.
    const closeButtons = screen.getAllByRole("button", { name: /close menu/i });
    fireEvent.click(closeButtons[closeButtons.length - 1]);
    expect(screen.queryByRole("button", { name: "Background" })).not.toBeInTheDocument();
  });

  it("closes the mobile menu on Escape and restores scrolling", () => {
    render(<NavBar />);
    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    fireEvent.keyDown(document, { key: "Escape" });

    expect(screen.queryByRole("button", { name: "Background" })).not.toBeInTheDocument();
    expect(document.body.style.overflow).not.toBe("hidden");
  });
});
