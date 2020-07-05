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
    <Flex width="100%">
      <Box py="1em" pr="1em">
        <Link as={GatsbyLink} to="/">
          <Text as="b">Jason Huang</Text>
        </Link>
      </Box>
      <Spacer />
      {items.map(({ name, location }) => (
        <Box padding="1em">
          <Link as={GatsbyLink} to={location}>
            {name}
          </Link>
        </Box>
      ))}
    </Flex>
  )
}

export default Navbar
