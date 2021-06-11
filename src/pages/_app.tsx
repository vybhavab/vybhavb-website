import type { AppProps /*, AppContext */ } from 'next/app';
import Navbar  from '@/components/Navbar';

import { Chakra } from "../common/chakra-color-manager"

const App = ({ Component, pageProps }:AppProps)=> {
return (
        <>
              <Chakra cookies={pageProps.cookies}>
              <Navbar/>
              <Component {...pageProps} />
              </Chakra>
        </>
    );
}


export default App;
