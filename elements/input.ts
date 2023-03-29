import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

const unstyled1 = definePartsStyle({
  field: {
    fontSize: 'xl',
    fontWeight: '500',
    color: 'app.black.2',
  }
});

export const inputTheme = defineMultiStyleConfig({
  variants: { unstyled1 }
});