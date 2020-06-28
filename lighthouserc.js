module.exports = {
  ci: {
    collect: {
      url: ["http://localhost/index.html"],
      staticDistDir: "public",
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}
