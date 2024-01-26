import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='homefooter'>
      <div className="firstFooterSect">
        <div className="topper">
            <img src="/topmintLogo.png" alt="company logo" />
            <span></span>
            <div className="socials_1">
                <a href="https://twitter.com/topmintofficial"><img src="/twitter.svg" alt="twitter" /></a>
                <a href="https://www.instagram.com/topmintofficial/"><img src="/insta.svg" alt="instagram" /></a>
                <a href="https://www.threads.net/@topmintofficial/"><img src="/threads.svg" alt="thread" /></a>
                <a href="https://www.facebook.com/TopMintOfficial"><img src="/facebook.svg" alt="facebook" /></a>
                <a href="https://discord.gg/topmintofficial"><img src="/discord.svg" alt="discord" /></a>
                <a href="https://hk.linkedin.com/company/topmint"><img src="/linkedin.svg" alt="linkedIn" /></a>
                <a href="https://www.reddit.com/r/top_mint"><img src="/reddit.svg" alt="reddit" /></a>
                <a href="https://t.me/CryptocomOfficial"><img src="/telegram.svg" alt="telegram" /></a>
            </div>
        </div>
        <div className="faller">
            <div className="leftFaller">
                <Link href={"/signup"} className="unitoptionFaller"><p>REGISTER</p></Link>
                <Link href={"/signin"} className="unitoptionFaller"><p>SIGN IN</p></Link>
                <Link href={"/about"} className="unitoptionFaller"><p>ABOUT</p></Link>
                <Link href={"/contact"} className="unitoptionFaller"><p>CONTACT</p></Link>
                <a href='#packages' className="unitoptionFaller"><p>PACKAGES</p></a>
            </div>
            <div className="centerFaller">
                <h4>ADDRESSES:</h4>
                <div>
                    <div className="address_1">
                        <h5>USA</h5>
                        <p>185 BERRY ST, SAN FRANCISCO, CA 94107 <br /> PHONE: +1 (207) 770‑7820</p>
                        <p>CONTACT@TOPMINTINVEST.COM</p>
                        <p>MON-SUN, 24/7</p>
                    </div>
                    <div className="address_1">
                        <h5>GREECE</h5>
                        <p>24 ASKLIPIOU ST, TRIKALA, THESSALY. 421 000 <br /> PHONE: 2431 022902</p>
                        <p>CONTACT@TOPMINTINVEST.COM</p>
                        <p>MON-FRI, 24/7</p>
                    </div>
                </div>
            </div>
            <div className="rightfaller fancybg">
                <h4>Get Started With Topmint</h4>
                <a href="#packages" className='fancyBtn'>Join Us</a>
            </div>
        </div>
      </div>
        <div className="secndFootersect">
            <div className="left">
                <p>
                    The purpose of this website is solely to display information regarding the products and services available on the TopmintInvest.com. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the TopmintInvest.com
                </p>
                <p>
                    Please note that the availability of the products and services on the TopmintInvest is subject to jurisdictional limitations. TopmintInvest may not offer certain products, features and/or services on the TopmintInvest in certain jurisdictions due to potential or actual regulatory restrictions.
                </p>
            </div>
            <div className="right">
                <div>
                    <img src="/aicpa.webp" alt="aicpa" />
                    <img src="/sgs_2.webp" alt="sgs" />
                </div>
                <div>
                    <img src="/pci.webp" alt="pci" />
                    <img src="/sgs_1.webp" alt="sgs" />
                </div>
            </div>
        </div>
        <div className="thirdfooterSect">
            <p>Copyright © 2018 - 2024 TopmintInvest.com All rights reserved.</p>
            <p>Loyalty | Security | Profit</p>
        </div>
    </footer>
  )
}

export default Footer
