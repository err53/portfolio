import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Navbar from "../components/navbar";
import { graphql, Link as GatsbyLink } from "gatsby";
import { Stack, List, Link, ListItem, Heading, Text } from "@chakra-ui/core";

const Projects = ({ data }) => {
  const { edges: projects } = data.allMdx;
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      <header>
        <Hero terminal="> ls ~/projects/" title="Projects" />
        <Text>Some of the things I've worked on</Text>
      </header>
      <Stack as="main">
        <List>
          {projects.map(({ node: project }) => (
            <ListItem key={project.id}>
              <Heading>
                <Link as={GatsbyLink} to={project.fields.slug}>
                  {project.frontmatter.title}
                </Link>
              </Heading>

              <Text>{project.excerpt}</Text>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Layout>
  );
};

export const pageQuery = graphql`
  query projectIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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
`;

export default Projects;
