import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const unstyled1 = defineStyle({
  color: 'app.gray.1',
  overflow: 'hidden'
});

const unstyled2 = defineStyle({
  color: 'app.black.2',
  overflow: 'hidden',
  resize: 'none'
});

export const textareaTheme = defineStyleConfig({
  variants: { unstyled1, unstyled2 }
});