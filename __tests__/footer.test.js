import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("shows the current year and author", () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()}`))
    ).toBeInTheDocument();
    expect(screen.getByText("Kenneth Camacho")).toBeInTheDocument();
  });

  it("uses the resume contact email", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /say hello/i })).toHaveAttribute(
      "href",
      "mailto:kenneth.camacho.swe@gmail.com"
    );
  });

  it("opens external profiles safely", () => {
    render(<Footer />);
    for (const name of [/github/i, /linkedin/i]) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });
});
