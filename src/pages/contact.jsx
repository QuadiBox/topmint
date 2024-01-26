import {useState} from 'react'
import Navbar from '../components/home/Navbar';
import Link from 'next/link';
import Footer from '../components/home/Footer';
import Head from 'next/head';

const Contact = () => {
    const [showsidecard, setShowsideCard] = useState(false);
  const [showDisplayCard, setshowDisplayCard] = useState(false);

  const handleGrandMovementTraffic = (e) => {
    if (e.target.className === "profileIcon") {
      setshowDisplayCard(prev => !prev);
    } else {
      setshowDisplayCard(false);
    }
  }
  return (
    <div className='HomefirstPageCtn conatctMain' onClick={handleGrandMovementTraffic}>
        <Head>
            <title>Contact</title>
            <meta property="og:title" content="Contact"/>
        </Head>
        <Navbar showsidecard={showsidecard} setShowsideCard={setShowsideCard} shownavOptions={false} showDisplayCard={showDisplayCard}/>
        <section className="sect1">
            <h1>What can we help you with?</h1>
        </section>
        <div className="preSect">
            <Link href={"/"}>Home</Link>
            <span><i class="icofont-rounded-right"></i></span>
            <p>Contact</p>
        </div>
        <div className="contactFormCntn">
            <form>
                <div className="inputFields">
                    <input type="text" placeholder='Firstname'/>
                    <input type="text" placeholder='Lastname'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Subject'/>
                </div>
                <textarea name="vlar" cols="30" rows="10" className='textarea' placeholder='Message'></textarea>
                <button type="submit" className='borderBtn'>Send Message</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
