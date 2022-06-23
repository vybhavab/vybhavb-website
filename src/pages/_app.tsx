import React, { ReactElement } from 'react';
import '../assets/css/index.css';
import Navbar from 'components/Navbar';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default App;
