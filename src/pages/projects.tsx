import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Navbar from "../components/navbar"
import { graphql, Link as GatsbyLink } from "gatsby"
import { Stack, List, Link, ListItem, Heading, Text } from "@chakra-ui/core"

const Projects = ({ data }) => {
  const { edges: projects } = data.allMdx
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      <Hero terminal="> ls ~/projects/" title="Projects" />
      <Text>Some of the things I've worked on</Text>
      <Stack>
        <List>
          {projects.map(({ node: project }) => (
            <ListItem key={project.id}>
              <Link as={GatsbyLink} to={project.fields.slug}>
                <Heading>{project.frontmatter.title}</Heading>
              </Link>
              <Text>{project.excerpt}</Text>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Layout>
  )
}

export const pageQuery = graphql`
  query projectIndex {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Projects
