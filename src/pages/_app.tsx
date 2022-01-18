import Navbar from 'components/Navbar';
import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import { Chakra } from '../common/chakra-color-manager';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Chakra cookies={pageProps.cookies}>
      <Navbar />
      <Component {...pageProps} />
    </Chakra>
  </>
);

export default App;
