import React from "react";
import { Flex, Stack, Text, Link } from "@chakra-ui/core";
import Socials from "./socials";

const Layout: React.FC = ({ children }) => {
  return (
    <Flex justifyContent="center" width="100vw">
      <Stack
        padding="4"
        height="100vh"
        justify="space-between"
        align="center"
        maxWidth="3xl"
      >
        <Stack as="body" width="100%">
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
    </Flex>
  );
};

export default Layout;
