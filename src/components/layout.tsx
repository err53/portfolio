import React from "react"
import { Stack, Flex, Text } from "@chakra-ui/core"

const Layout: React.FC = ({ children }) => {
  return (
    <Stack padding="1em" height="100vh" justify="space-between" align="center">
      <Stack as="body" width="100%" align="center" maxWidth="lg">
        {children}
      </Stack>
      <Flex as="footer" width="100%">
        <Text>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </Flex>
    </Stack>
  )
}

export default Layout
