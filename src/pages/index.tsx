import React from "react"
import { Text, Link } from "@chakra-ui/core"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import { Link as GatsbyLink } from "gatsby"

const Home = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <Hero terminal="> whoami" title="Jason Huang" />
      <Text>
        Hi, I'm Jason. I'm a highschool student, aspiring software developer,
        and a Linux enthusiast.
      </Text>
      <Text>
        I have been programming since ~2015. I primarily do frontend
        development, but have experience programming for backend. I also have a
        hobby of learning about SysAdmin and DevOps. I wouldn't call myself a
        full-stack developer, since I don't think I have enough experience to
        qualify as such just yet.
      </Text>
      <Text>
        Aside from programming, I'm an advocate for Linux and OSS, and love to
        learn more about how the tools I use work. I'm also interested in
        compuiter security, and have been known to do the occasional CTF.
      </Text>
      <Text>
        Check out some of my work under{" "}
        <Link as={GatsbyLink} to="/projects">
          <Text as="b">Projects</Text>
        </Link>
        , or follow me on my socials below. (I try not to use social media that
        much, so email is probably the best way to reach me.)
      </Text>
    </Layout>
  )
}
export default Home
