import React from "react"
import { Flex, Box, Text, Link, Spacer } from "@chakra-ui/core"
import { Link as GatsbyLink } from "gatsby"

const Navbar = () => {
  const items = [
    {
      name: "Projects",
      location: "/projects",
    },
    {
      name: "Resume",
      location: "/resume",
    },
  ]
  return (
    <Flex as="nav" width="100%">
      <Box pr="4" flex="1">
        <Link as={GatsbyLink} to="/">
          <Text as="b">Jason Huang</Text>
        </Link>
      </Box>
      {items.map(({ name, location }) => (
        <Box px="4">
          <Link as={GatsbyLink} to={location}>
            {name}
          </Link>
        </Box>
      ))}
    </Flex>
  )
}

export default Navbar
