module.exports = {
  ci: {
    collect: {
      url: ["http://localhost/index.html"],
      staticDistDir: "public",
      numberOfRuns: 2,
      staticDistDir: "./public",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "first-contentful-paint": [
          "warn",
          {
            maxNumericValue: 2500,
            aggregationMethod: "optimistic",
          },
        ],
        interactive: [
          "warn",
          {
            maxNumericValue: 5000,
            aggregationMethod: "optimistic",
          },
        ],
        "uses-long-cache-ttl": "off",
        "uses-http2": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
