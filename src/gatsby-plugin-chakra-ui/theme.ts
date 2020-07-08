import theme from "@chakra-ui/theme"

export default {
  ...theme,
  components: {
    ...theme.components,
    Link: {
      baseStyle: {
        transition: `all 0.15s ease-out`,
        cursor: "pointer",
        textDecoration: "underline",
        outline: "none",
        color: "inherit",
        _hover: {
          textDecoration: "underline",
          color: "gray.600",
        },
        _focus: {
          boxShadow: "outline",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
          textDecoration: "none",
        },
      },
    },
  },
}
