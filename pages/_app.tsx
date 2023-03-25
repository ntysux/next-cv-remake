import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    app: {
      black: {
        1: '#49474B',
        2: '#68666B'
      },
      gray: {
        1: '#88898C',
        2: '#D9D9D9',
        3: '#E0E0E0',
        4: '#EBEBEB'
      },
      teal: {
        1: '#5CF2E3'
      }
    }
  },
  components: {
    
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}