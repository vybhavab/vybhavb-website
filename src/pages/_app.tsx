import React, { ReactElement } from 'react';
import "../assets/css/index.css";
import type { AppProps } from 'next/app';
import Navbar from 'components/Navbar';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <>
    <Navbar />
    <Component {...pageProps} />
  </>
);

export default App;
