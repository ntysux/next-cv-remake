import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const unstyled1 = definePartsStyle({
  field: {
    color: 'app.gray.1'
  }
});

export const inputTheme = defineMultiStyleConfig({
  variants: { unstyled1 }
});