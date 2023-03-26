import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    p: 1,
    bg: 'app.black.1',
    border: 'none',
    rounded: 'sm'
  },
  item: {
    p: 1,
    rounded: 'sm',
    fontSize: 'md',
    color: 'app.gray.3',
    bg: 'app.black.1',
    _hover: {
      bg: 'app.black.2',
      color: 'white'
    }
  },
  command: {
    fontSize: 'sm'
  },
  divider: {
    my: 1
  }
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });