import '../styles/globals.css';
import '../styles/home.css';
import "../styles/search.css";
import "../styles/solarsystem.css";
import "../styles/playground.css";
import "../styles/glossary.css";
import "../styles/404.css";
import Head from "next/head";
import { Alegreya } from "next/font/google";
import { useState, useRef } from 'react';
import ThemeProvider from '../../providers/ThemeProvider';
import { AnimatePresence } from 'framer-motion';

const alegreya = Alegreya({ subsets: ['latin'] })
 
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
        <main onMouseMove={handleCursorTrailer} onMouseEnter={handleCursorOn} onMouseLeave={handleCursorOff}>
          <Head>
            <title>QuadVerse</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>
          <div ref={cursorRef} className='cursorTrailer'></div>
          <Component {...pageProps} />
        </main>
      </AnimatePresence>
    </ThemeProvider>
  ) 
}
