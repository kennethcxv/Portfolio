const nextConfig = require("../next.config.js");

describe("security configuration", () => {
  it("disables the X-Powered-By header", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });

  it("enables React strict mode", () => {
    expect(nextConfig.reactStrictMode).toBe(true);
  });

  describe("security headers", () => {
    let headers;

    beforeAll(async () => {
      const rules = await nextConfig.headers();
      expect(rules).toHaveLength(1);
      expect(rules[0].source).toBe("/:path*");
      headers = Object.fromEntries(rules[0].headers.map((h) => [h.key, h.value]));
    });

    it.each([
      "Content-Security-Policy",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Permissions-Policy",
      "Strict-Transport-Security",
    ])("sets %s on every route", (key) => {
      expect(headers[key]).toBeTruthy();
    });

    it("locks the CSP down to same-origin", () => {
      const csp = headers["Content-Security-Policy"];
      expect(csp).toContain("default-src 'self'");
      expect(csp).toContain("object-src 'none'");
      expect(csp).toContain("frame-ancestors 'none'");
      expect(csp).toContain("base-uri 'self'");
      // No third-party origins should ever be whitelisted.
      expect(csp).not.toMatch(/https?:\/\//);
    });

    it("denies framing and MIME sniffing", () => {
      expect(headers["X-Frame-Options"]).toBe("DENY");
      expect(headers["X-Content-Type-Options"]).toBe("nosniff");
    });

    it("enforces HSTS for at least one year", () => {
      const maxAge = Number(/max-age=(\d+)/.exec(headers["Strict-Transport-Security"])[1]);
      expect(maxAge).toBeGreaterThanOrEqual(31536000);
    });
  });
});
