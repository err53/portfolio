import React from "react"
import { Flex } from "@chakra-ui/core"

const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      direction="column"
      margin="0 auto"
      maxW="960"
      padding="0 1.0875rem 1.45rem"
    >
      <body>{children}</body>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Flex>
  )
}

export default Layout
