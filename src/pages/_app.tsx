import type { AppProps /*, AppContext */ } from 'next/app';

import '../assets/styles/index.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function Website({ Component, pageProps }: AppProps) {
  const items = [
                {
                    label: "resume",
                    link:"/Resume.pdf"
                },
                {
                    label:"Other Place"
                }
                ];
  return <> <Navbar items={items}/> <Component {...pageProps} /> <Footer /></>
}

export default Website;
