import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import About from "@/pages/about";
import Background from "@/pages/background";
import Projects from "@/pages/projects";
import Articles from "@/pages/articles";

describe("Home", () => {
  it("links the resume PDF and contact email", () => {
    render(<Home />);
    const resume = screen.getByRole("link", { name: /resume/i });
    expect(resume).toHaveAttribute("href", "/Kenneth_Camacho_Resume.pdf");
    expect(resume.getAttribute("rel")).toContain("noopener");
    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "mailto:kenneth.camacho.swe@gmail.com"
    );
  });

  it("introduces Kenneth with current roles", () => {
    render(<Home />);
    expect(screen.getByText(/Georgia Tech/)).toBeInTheDocument();
    expect(screen.getByText(/Rubrik and Chime/)).toBeInTheDocument();
  });
});

describe("About", () => {
  it("reflects the updated resume", () => {
    render(<About />);
    expect(screen.getByText(/M\.S\./)).toBeInTheDocument();
    expect(screen.getByText(/summa cum laude/)).toBeInTheDocument();
    expect(screen.getByText(/Community Members/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Kenneth Camacho/)).toBeInTheDocument();
  });
});

describe("Background", () => {
  it("lists all four internships", () => {
    render(<Background />);
    for (const company of ["@Rubrik", "@Chime", "@EloStack", "@Sebanda Insurance"]) {
      expect(screen.getByText(company)).toBeInTheDocument();
    }
  });

  it("lists awards and both degrees", () => {
    render(<Background />);
    expect(screen.getByText("@Code Culture")).toBeInTheDocument();
    expect(screen.getByText("@eMerge Americas Hackathon")).toBeInTheDocument();
    expect(screen.getByText("@Georgia Institute of Technology")).toBeInTheDocument();
    expect(screen.getByText("@Florida State University")).toBeInTheDocument();
  });
});

describe("Projects", () => {
  it("features the three systems projects from the resume", () => {
    render(<Projects />);
    expect(screen.getByText("Distributed Key-Value Store (Raft)")).toBeInTheDocument();
    expect(screen.getByText("Distributed Job Queue")).toBeInTheDocument();
    expect(screen.getByText("Semantic Code Search Engine")).toBeInTheDocument();
  });

  it("opens every external project link safely", () => {
    render(<Projects />);
    const external = screen
      .getAllByRole("link")
      .filter((link) => link.getAttribute("href")?.startsWith("http"));
    expect(external.length).toBeGreaterThan(10);
    for (const link of external) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });
});

describe("Articles", () => {
  it("renders featured and listed articles", () => {
    render(<Articles />);
    expect(
      screen.getAllByText(/Unraveling the Black Box/i).length
    ).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Leveraging Machine Learning to Combat/i)).toBeInTheDocument();
  });
});
