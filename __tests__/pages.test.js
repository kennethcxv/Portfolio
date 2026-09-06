import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import About from "@/pages/about";
import Background from "@/pages/background";
import Projects from "@/pages/projects";
import Impact from "@/pages/impact";

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
    expect(screen.getByText(/NVIDIA DRIVE/)).toBeInTheDocument();
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
    expect(screen.getByText(/specialization in\s+Machine Learning/)).toBeInTheDocument();
  });
});

describe("Background", () => {
  it("lists the three resume internships, NVIDIA first", () => {
    render(<Background />);
    for (const company of ["@NVIDIA", "@Rubrik", "@Chime"]) {
      expect(screen.getByText(company)).toBeInTheDocument();
    }
    for (const dropped of ["@EloStack", "@Sebanda Insurance"]) {
      expect(screen.queryByText(dropped)).not.toBeInTheDocument();
    }
    expect(screen.getByText("@NVIDIA")).toHaveAttribute(
      "href",
      "https://www.nvidia.com/en-us/self-driving-cars/"
    );
    expect(screen.getByText(/Sep 2026 – Present/)).toBeInTheDocument();
    expect(screen.getByText(/May 2026 – Aug 2026/)).toBeInTheDocument();
  });

  it("lists awards and both degrees", () => {
    render(<Background />);
    expect(screen.getByText("@Code Culture")).toBeInTheDocument();
    expect(screen.getByText("@eMerge Americas Hackathon")).toBeInTheDocument();
    expect(screen.getByText("@Georgia Institute of Technology")).toBeInTheDocument();
    expect(screen.getByText("@Florida State University")).toBeInTheDocument();
    expect(screen.getByText(/Expected May 2027/)).toBeInTheDocument();
    expect(screen.getByText(/Graduated Aug 2026/)).toBeInTheDocument();
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

describe("Impact", () => {
  it("groups the resume metrics by section", () => {
    render(<Impact />);
    for (const heading of [
      "Systems & Performance",
      "Product & Platform",
      "Systems I Built",
    ]) {
      expect(screen.getByText(heading)).toBeInTheDocument();
    }
  });

  it("labels each headline metric it reports", () => {
    render(<Impact />);
    for (const label of [
      "p95 execution latency",
      "throughput",
      "incident MTTR",
      "writes sustained",
      "irrelevant top-k results",
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });

  it("links the resume safely", () => {
    render(<Impact />);
    const resume = screen.getByRole("link", { name: /resume/i });
    expect(resume).toHaveAttribute("href", "/Kenneth_Camacho_Resume.pdf");
    expect(resume.getAttribute("rel")).toContain("noopener");
  });
});
