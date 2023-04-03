import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { buttonTheme } from '@/elements/button';
import { menuTheme } from '@/elements/menu';
import { inputTheme } from '@/elements/input';
import { textareaTheme } from '@/elements/textarea';
import { badgeTheme } from '@/elements/badge';
import { listTheme } from '@/elements/list';

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
    Button: buttonTheme,
    Menu: menuTheme,
    Input: inputTheme,
    Textarea: textareaTheme,
    Badge: badgeTheme,
    List: listTheme
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}