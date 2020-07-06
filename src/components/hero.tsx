import React from "react"
import { Text, Stack, Heading } from "@chakra-ui/core"

const Hero: React.FC<{
  terminal: string
  title: string
  description: string
}> = ({ terminal, title, description }) => {
  return (
    <Stack width="100%" py="1em">
      <Text fontFamily="mono" fontSize={["2xl", "3xl"]}>
        {terminal}
      </Text>
      <Heading as="h1" fontSize={["5xl", "6xl"]}>
        {title}
      </Heading>
      <Text fontSize="xl">{description}</Text>
    </Stack>
  )
}

export default Hero
