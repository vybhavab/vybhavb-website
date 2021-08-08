import Navbar from '@/components/navbar';
import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import { Chakra } from '../common/chakra-color-manager';

const App = ({ Component, pageProps }:AppProps):ReactElement => (
  <>
    <Chakra cookies={pageProps.cookies}>
      <Navbar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Chakra>
  </>
);

export default App;
