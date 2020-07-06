import React from "react"
import { Stack, Text, Link } from "@chakra-ui/core"
import Socials from "./socials"

const Layout: React.FC = ({ children }) => {
  return (
    <Stack
      padding="1em"
      height="100vh"
      justify="space-between"
      align="center"
      maxWidth="3xl"
      mx="auto"
    >
      <Stack as="body" width="100%" align="center">
        {children}
      </Stack>
      <Stack as="footer" width="100%" align="center">
        <Socials />
        <Text>
          © {new Date().getFullYear()}, Built with
          {` `}
          <Link href="https://www.gatsbyjs.org">Gatsby</Link>
        </Text>
      </Stack>
    </Stack>
  )
}

export default Layout
