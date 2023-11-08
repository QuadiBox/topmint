import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html lang='en'>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="theme-color" content='#ffa86a'/>
        <link rel="stylesheet" href="/icofont/icofont.min.css"/>
        <meta property="og:title" content="QuadVox"/>
        <meta property="og:description" content="A finely designed portfolio website showcasing my talent as an experienced Frontend software developer."/>
        <link rel="icon" href="/darkLogosmall.png"/>
        <link rel="apple-touch-icon" href="/darkLogosmall.png"/>
        <meta property="og:image" content="/darkLogosmall.png"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100;300;400;500;700;800;900&family=Andika:wght@400;700&family=Dancing+Script:wght@400;500;600&family=Forum&family=IBM+Plex+Mono:wght@300;400;500&family=Josefin+Sans:wght@200;300;400;500;600&family=Jost:wght@300;400;500&family=Metrophobic&family=Oswald:wght@200;400;500;600&family=Sedgwick+Ave+Display&family=Unica+One&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}