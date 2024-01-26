import {useState, useEffect} from 'react'
import Navbar from '../components/home/Navbar';
import Link from 'next/link';
import Footer from '../components/home/Footer';
import IframeSect from '../components/home/IframeSect';
import Testimonies from '../components/home/testimonies';
import Head from 'next/head';

const About = () => {
    const [showsidecard, setShowsideCard] = useState(false);
    const [showDisplayCard, setshowDisplayCard] = useState(false);

    const handleGrandMovementTraffic = (e) => {
        if (e.target.className === "profileIcon") {
        setshowDisplayCard(prev => !prev);
        } else {
        setshowDisplayCard(false);
        }
    }

    useEffect(() => {
        // Load the Google Translate API script dynamically
        const script = document.createElement('script');
        // script.type = 'text/javascript';
        script.src = 'https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js';
        script.async = true;
        document.head.appendChild(script);
    
        // Clean up the script tag when the component is unmounted
        return () => {
          document.head.removeChild(script);
        };
    }, []);
    
    return (
        <div className='HomefirstPageCtn aboutMainCtn conatctMain' onClick={handleGrandMovementTraffic}>
            <Head>
                <title>Contact</title>
                <meta property="og:title" content="About"/>
            </Head>
        <Navbar showsidecard={showsidecard} setShowsideCard={setShowsideCard} shownavOptions={false} showDisplayCard={showDisplayCard}/>
        <section className="sect1">
            <h1>What we are all about...</h1>
        </section>
        <div className="preSect">
            <Link href={"/"}>Home</Link>
            <span><i class="icofont-rounded-right"></i></span>
            <p>About</p>
        </div>
        <section id="about" className="about">

            <div className="whatareweabout">
              <div className="aboutimg"></div>
              <div className="abouttext">
                <h2>At Our Company</h2>
                <p>We are a legally operating trading/investment company. The company was created by a group of qualified experts, professional bankers, traders and analysts who specialized in <span>cryptocurrency</span>, <span>binary</span>, <span>the stock</span>, <span>bond</span>, <span>futures</span>, <span>currencies</span>, <span>gold</span>, <span>silver</span> and <span>oil trading</span> with having more than ten years of extensive practical experiences of combined personal skills, knowledge, talents and collective ambitions for success.</p>
                <p>We believe that superior investment performance is achieved through a skillful balance of three core attributes: knowledge, experience and adaptability. There is only one way to be on the cutting edge – commitment to innovation. We do our best to achieve a consistent increase in investment performance for our clients, and superior value-add. We appreciate our clients loyalty and value the relationships we build with each customer.</p>
                <Link className="borderBtn" href={"/about"}>More About Our Company...</Link>
              </div>
            </div>
            <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,dogecoin,stellar,algorand,flow,dai,usdd,maker,astar,tezos,solana,neo,gala,cardano,aptos,helium,kava" currency="usd" background-color="#000613" locale="en"></coingecko-coin-price-marquee-widget>

            <div className="companyscopes">
              <div className="unitscope advantage">
                <h3>OUR ADVANTAGES</h3>
                <p>Our Investment Options are very fair and all transactional data is stored on Block chain, which allows to create, transfer and verify ultra-secure financial data without interference of third parties.</p>
              </div>
              <span className="vertSept" role="separator"></span>
              <div className="unitscope advantage">
                <h3>OUR GUARANTEES</h3>
                <p>We are here because we are passionate about open, transparent markets and aim to be a major driving force in widespread adoption, we assure you of maximum profit using our platform and of cause we will safeguard your data.</p>
              </div>
              <span className="vertSept" role="separator"></span>
              <div className="unitscope advantage">
                <h3>OUR MISSION</h3>
                <p>Our mission as a platform is to to help get you on the right track and earn out of every option even as you start your investing journey.</p>
              </div>
            </div>
          </section>
        <IframeSect/>
        <Testimonies/>
        <Footer/>
    </div>
    )
}

export default About
