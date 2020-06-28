import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Hero
        terminal="~$ ls ~/projects"
        title="Projects"
        description="Some of the things I've worked on"
      />
    </Layout>
  )
}

export default Projects
