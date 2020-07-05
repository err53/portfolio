module.exports = {
  ci: {
    collect: {
      url: ["http://localhost/index.html"],
      staticDistDir: "public",
      numberOfRuns: 5,
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "unused-javascript": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
