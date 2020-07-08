import React from "react"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { Flex, IconButton, Link } from "@chakra-ui/core"

const Socials = () => {
  const socials = [
    {
      label: "GitHub",
      icon: <FaGithub />,
      location: "https://github.com/jhthenerd",
    },
    {
      label: "Twitter",
      icon: <FaTwitter />,
      location: "https://twitter.com/jhthenerd",
    },
    {
      label: "Email",
      icon: <FaEnvelope />,
      location: "mailto:jasonhuang@disroot.org "
    }
  ]
  return (
    <Flex p="1em">
      {socials.map(({ label, icon, location }) => (
        <IconButton
          size="lg"
          aria-label={label}
          icon={icon}
          m="0.5em"
          as={Link}
          href={location}
        />
      ))}
    </Flex>
  )
}

export default Socials
