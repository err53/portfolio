import React from "react"
import { Text, Stack, Heading } from "@chakra-ui/core"

const Hero: React.FC<{ name: string; description: string }> = ({
  name,
  description,
}) => {
  return (
    <Stack align="center" textAlign="center">
      <Text fontFamily="mono" fontSize={["2xl", "3xl"]}>
        ~$ whoami
      </Text>
      <Heading as="h1" fontSize={["5xl", "6xl"]}>
        {name}
      </Heading>
      <Text fontSize="xl">{description}</Text>
    </Stack>
  )
}

export default Hero
