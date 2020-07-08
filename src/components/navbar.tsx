import React from "react"
import { Flex, Box, Text, Link, Spacer } from "@chakra-ui/core"
import FilteredLink from "./filteredLink"

const Navbar = () => {
  const items = [
    {
      name: "Projects",
      location: "/projects",
    },
    {
      name: "Resume",
      location: "https://media.githubusercontent.com/media/jhthenerd/resume/master/resume.pdf",
    },
  ]
  return (
    <Flex as="nav" width="100%">
      <Box pr="4" flex="1">
        <Link as={FilteredLink} to="/">
          <Text as="b">Jason Huang</Text>
        </Link>
      </Box>
      {items.map(({ name, location }) => (
        <Box px="4">
          <Link as={FilteredLink} to={location}>
            {name}
          </Link>
        </Box>
      ))}
    </Flex>
  )
}

export default Navbar
