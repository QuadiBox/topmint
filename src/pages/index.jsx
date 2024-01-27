import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import Testimonies from "../components/home/testimonies";
import FAQ from "../components/home/FAQ";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import IframeSect from "../components/home/IframeSect";


export default function Home() {
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
  const [currentUser, setCurrentUser] = useState({});

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
    const user = JSON.parse(sessionStorage.getItem("activeUser")) || JSON.parse(localStorage.getItem("activeUser"));
    setCurrentUser(user);
  }, []);


  //Animation variables
  const parentVar = {
    init: {
      opacity: 0.95
    },
    finale: {
      opacity: 1,
      transition: {
        duration: 0.01,
      }
    }
  }

  const slideUp = {
    init: {
      opacity: 0,
      y: "100%"
    },
    finale: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      }
    }
  }


  return (
      <div className="HomefirstPageCtn" onClick={handleGrandMovementTraffic}>
        <Navbar showsidecard={showsidecard} setShowsideCard={setShowsideCard} shownavOptions={true} showDisplayCard={showDisplayCard}/>
        <main>
          <section className="homeIntro">
            <h1>The World’s Premier <br /> Investent & Trading Platform</h1>
            <p>Trade with us and get a high margin return on your investment</p>
            <ul>
              <li><i className="icofont-cop-badge"></i> Trading with us guarantees <span>high profit margin</span></li>
              <li><i className="icofont-cop-badge"></i> Leader in <span>regulatory compliance</span> and <span>security certifications</span></li>
              <li><i className="icofont-cop-badge"></i> Trusted by over <span> over 1 million users</span> worldwide</li>
              <li><i className="icofont-cop-badge"></i> Get <span>$50 bonus</span> when you register with us</li>
            </ul>
            <div className="cta">
              <a href="#packages" className="fancyBtn">Invest Now</a>
            </div>
          </section>
          <div className="keyfactsCntn">
            <div className="keyfacts fancybg">
                <div className="unitfact">
                  <h2>1M+</h2>
                  <p>Active Users</p>
                </div>
                <div className="unitfact">
                  <h2>$490.9M+</h2>
                  <p>Total Withdrawals</p>
                </div>
                <div className="unitfact">
                  <h2>$180M+</h2>
                  <p>Total Investment</p>
                </div>
                <div className="unitfact">
                  <h2>$700M</h2>
                  <p>Market Cap</p>
                </div>
            </div>
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
          <section className="features">
            <h2>You Can Never Go Wrong With TOPMINT</h2>
            <div className="thefeatureGrid">
              <div className="topSubgrid">
                <div className="lefttopSubgrid">
                  <div className="gridunit floater">
                    <h3>STRONG SECURITY</h3>
                    <p>Protection against DDoS attacks, full data encryption.</p>
                  </div>
                  <div className="gridunit floater">
                    <h3>PAYMENT OPTIONS</h3>
                    <p>Our Major payment option is Crypto currency which is accessible to all users world wide.</p>
                  </div>
                </div>
                <div className="righttopsubgrid floater">
                  <h3>MOBILE ACCESS</h3>
                  <p>Access Your Investment conveniently on your mobile phone any time, anywhere, any day.</p>
                </div>
              </div>
              <div className="bottomSubgrid">
                <div className="leftbottomSubgrid floater">
                  <h3>COST EFFECTIVE</h3>
                  <p>Reasonable system fees for all platform users across all market options.</p>
                </div>
                <div className="rightBottomSubgrid floater">
                  <h3>HIGH LIQUIDITY</h3>
                  <p>Our Platform offers high liquidity for all investment options available to our users.</p>
                </div>
              </div>
              <div className="cta2 fancybg">
                <div className="leftCta2">
                  <h2>Join our <span>1M+ active users</span></h2>
                  <p>Get Started Today</p>
                </div>
                <a href="#" className="fancyBtn">Join now</a>
              </div>
            </div>
          </section>
          <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin,tron,dogecoin,stellar,algorand,flow,dai,usdd,maker,astar,tezos,solana,neo,gala,cardano,aptos,helium,kava,fantom" currency="usd" background-color="#000613" locale="en"></coingecko-coin-price-marquee-widget>
          <section className="pathToInvest">
            <h2>Your Investment Journey Starts Here</h2>
            <div className="pathCntn">
              <div className="unitPathSect">
                <span>1.</span>
                <img src="/download_coin.png" alt="Register" />
                <h2>Register</h2>
                <p>Complete Our Details and Verify Your Email Address.</p>
              </div>
              <div className="unitPathSect">
                <span>2.</span>
                <img src="/add_coins.png" alt="Register" />
                <h2>Buy any of our packages</h2>
                <p>Fund your wallet and buy into any plan of your choice and watch our system trade for you.</p>
              </div>
              <div className="unitPathSect">
                <span>3.</span>
                <img src="/buy_sell.png" alt="Register" />
                <h2>Start Earning</h2>
                <p>Instantly watch your investment grow. Pay Outs Every 60 Minutes.</p>
              </div>
            </div>
          </section>
          {
            currentUser?.admin && (
              <section id="packages" className="packages">
                <h2>Kickstart Your Journey To Financial Freedom</h2>
                <div className="packagesCntn">
                  <div className="unitPackage">
                    <h3>SILVER</h3>
                    <h4><span>$100</span> <br /> - <br /> <span>$900</span></h4>
                    <ul>
                      <li><i className="icofont-tick-mark"></i> <span>500% ROI</span></li>
                      <li><i className="icofont-tick-mark"></i> <span>Get ROI in 2 Days</span></li>
                    </ul>
                    <Link href={currentUser?.id ? "/profile#packages" : "/signup"} className="borderBtn">Invest</Link>
                  </div>
                  <div className="unitPackage fancybg">
                    <h3>DIAMOND <i class="icofont-diamond"></i></h3>
                    <h4><span>$10,000</span> <br /> - <br /> <span>$100,000</span></h4>
                    <ul>
                      <li><i className="icofont-tick-mark"></i> <span>50% ROI</span></li>
                      <li><i className="icofont-tick-mark"></i> <span>Get ROI in 7 Days</span></li>
                      <li><i className="icofont-tick-mark"></i> <span>Access to 15 of our digital financial resources</span></li>
                    </ul>
                    <Link href={currentUser?.id ? "/profile#packages" : "/signup"} className="fancyBtn">Get Rich</Link>
                  </div>
                  <div className="unitPackage">
                    <h3>GOLD</h3>
                    <h4><span>$1,000</span> <br /> - <br /> <span>$9,000</span></h4>
                    <ul>
                      <li><i className="icofont-tick-mark"></i> <span>25% ROI</span></li>
                      <li><i className="icofont-tick-mark"></i> <span>Get ROI in 4 Days</span></li>
                      <li><i className="icofont-tick-mark"></i> <span>Access to 5 of our digital financial resources</span></li>
                    </ul>
                    <Link href={currentUser?.id ? "/profile#packages" : "/signup"} className="borderBtn">Invest</Link>
                  </div>
                </div>
              </section>
            )
          }
          <IframeSect/>
          <Testimonies/>
          <FAQ/>
          <Footer/>
        </main>
      </div>
  );
}

export async function getServerSideProps () {

  return {
    props: { apod: "ADA" },
  };
}

