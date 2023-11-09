import '../styles/home.css';
import '../styles/projects.css';
import '../styles/global.css';
import Head from "next/head";
import { useState, useRef } from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import { AnimatePresence } from 'framer-motion';

 
export default function App({ Component, pageProps }) {
  const [cursorValues, setCursorValues] = useState({
    x: 0,
    y: 0,
  });

  const cursorRef = useRef(null);

  const handleCursorTrailer = (e) => {
    setCursorValues({x: e.clientX, y: e.clientY});
    const x = e.clientX - cursorRef.current.offsetWidth/2;
    const y = e.clientY - cursorRef.current.offsetHeight/2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px)`
    }

    cursorRef.current.animate(keyframes, {
      duration: 250,
      fill: "forwards"
    });
  }

  const handleCursorOn = () => {
    cursorRef.current.style.opacity = 1;
  }

  const handleCursorOff = () => {
    cursorRef.current.style.opacity = 0;
  }



  return (
    <ThemeProvider>
      <AnimatePresence mode='wait'>
        <main>
          <Head>
            <title>QuadVox</title>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content='#ffa86a'/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" href="/darkLogosmall.png"/>
            <link rel="apple-touch-icon" href="/darkLogosmall.png"/>
            <meta property="og:title" content="QuadVox"/>
            <meta property="og:description" content="A finely designed portfolio website showcasing my talent as an experienced Frontend software developer."/>
            <meta property="og:image" content="/darkLogosmall.png"/>
          </Head>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  ) 
}
