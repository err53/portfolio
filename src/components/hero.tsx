import React from "react"
import { Text, Stack, Heading } from "@chakra-ui/core"

const Hero: React.FC<{
  terminal: string
  title?: string
}> = ({ terminal, title }) => {
  return (
    <Stack width="100%" py="1em">
      <Text fontFamily="mono" fontSize={["2xl", "3xl"]}>
        {terminal}
      </Text>
      {title ? (
        <Heading as="h1" fontSize={["5xl", "6xl"]}>
          {title}
        </Heading>
      ) : (
        {}
      )}
    </Stack>
  )
}

export default Hero
