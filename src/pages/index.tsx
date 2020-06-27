import React from "react"
import { Button, Flex } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { navigate, Link } from "gatsby"

const Home = () => {
  return (
    <Layout>
      <Hero
        terminal="~$ whoami"
        title="Jason Huang"
        description="High School Student, Software Developer, Linux Enthusiast"
      />

      <Flex direction="column" justify="center" margin="1em" width="100%">
        <Button as={Link} to="/projects/" margin="1em">
          Projects
        </Button>

        <Button as={Link} to="/resume/" margin="1em">
          Resume
        </Button>
      </Flex>
    </Layout>
  )
}
export default Home
