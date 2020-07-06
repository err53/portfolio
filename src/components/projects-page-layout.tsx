import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "./layout"
import Hero from "./hero"
import SEO from "./seo"
import Navbar from "./navbar"
import { Heading, Box, Text, Stack } from "@chakra-ui/core"
const shortcodes = {
  h1: props => <Heading {...props} as="h1" size="2xl" />,
  h2: props => <Heading {...props} as="h2" size="xl" />,
  h3: props => <Heading {...props} as="h3" size="lg" />,
  h4: props => <Heading {...props} as="h4" size="md" />,
  h5: props => <Heading {...props} as="h5" size="sm" />,
  h6: props => <Heading {...props} as="h6" size="xs" />,
  p: props => <Text {...props} />,
  Link,
} // Provide common components here
export default function PageTemplate({ data: { mdx } }) {
  return (
    // <div>
    //   <h1>{mdx.frontmatter.title}</h1>
    //   <MDXProvider components={shortcodes}>
    //     <MDXRenderer>{mdx.body}</MDXRenderer>
    //   </MDXProvider>
    // </div>
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Navbar />
      <Hero
        terminal={`> ls ~${mdx.fields.slug}`}
        title={mdx.frontmatter.title}
      />
      <Box width="100%">
        <MDXProvider components={shortcodes}>
          <Stack>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Stack>
        </MDXProvider>
      </Box>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
