import '../styles/contact.css';
import '../styles/dashboard.css';
import '../styles/signup.css';
import '../styles/home.css';
import '../styles/global.css';
import Head from "next/head";
import ThemeProvider from '../../providers/ThemeProvider';
import { AnimatePresence } from 'framer-motion';

 
export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider>
      <AnimatePresence mode='wait'>
        <main>
          <Head>
            <title>TopmintInvest</title>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content='#ffa86a'/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/topmintSmall.png"/>
            <link rel="apple-touch-icon" href="/topmintSmall.png"/>
            <meta property="og:title" content="Topmint Invest"/>
            <meta property="og:description" content="A finely designed portfolio website showcasing my talent as an experienced Frontend software developer."/>
          </Head>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  ) 
}
