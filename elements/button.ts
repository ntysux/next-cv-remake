import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// solid
const solid1 = defineStyle({
  bg: 'app.black.1',
  color: 'white'
});

// outline
const outline1 = defineStyle({
  bg: 'white',
  border: '2px',
  borderColor: 'app.black.1',
  color: 'app.black.1',
  _hover: {
    color: 'white',
    bg: 'app.black.1',
  }
});

const unstyled1 = defineStyle({
  color: 'app.gray.1',
  _hover: {
    color: 'app.gray.2'
  }
});

export const buttonTheme = defineStyleConfig({
  variants: {solid1, outline1, unstyled1}
});