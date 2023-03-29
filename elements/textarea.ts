import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const unstyled1 = defineStyle({
  color: 'app.gray.1',
  overflow: 'hidden'
});

export const textareaTheme = defineStyleConfig({
  variants: { unstyled1 }
});