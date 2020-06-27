import React from "react"
import { Heading } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"

const Projects = () => {
  return (
    <Layout>
      <Hero terminal="~$ ls ~/projects" title="Projects" description="Some of the things I've worked on"/>
    </Layout>
  )
}

export default Projects