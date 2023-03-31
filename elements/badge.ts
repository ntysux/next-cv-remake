import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid1 = defineStyle({
  w: 'min',
  color: 'app.gray.1',
  bg: 'app.gray.2'
});

export const badgeTheme = defineStyleConfig({
  variants: { solid1 }
});