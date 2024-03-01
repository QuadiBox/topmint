import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Navbar from '../components/home/Navbar';
import Link from 'next/link';
import Footer from '../components/home/Footer';
import Head from 'next/head';

const Contact = () => {
    const [showsidecard, setShowsideCard] = useState(false);
  const [showDisplayCard, setshowDisplayCard] = useState(false);
  const form = useRef(null);

  const handleGrandMovementTraffic = (e) => {
    if (e.target.className === "profileIcon") {
      setshowDisplayCard(prev => !prev);
    } else {
      setshowDisplayCard(false);
    }
  }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            `service_s5g7n0x`,
            "template_9bk2kel",
            form.current,
            "W0tSQpqgPaa8k369b"
        )
        .then(
            (result) => {
                console.log(result.text);
                form.current.reset();
                alert("Your message was sent succesfully");
            },
            (error) => {
                console.log(error.text)
                form.current.reset();
                alert("There was an error while trying to send your message");
            }
        ); 
    };

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
            <form ref={form} onSubmit={sendEmail}>
                <div className="inputFields">
                    <input type="text" name="user_name" placeholder='Firstname'/>
                    <input type="text" placeholder='Lastname'/>
                    <input type="text" name="user_email" placeholder='Email'/>
                    <input type="text" placeholder='Subject'/>
                </div>
                <textarea cols="30" rows="10" name="message" className='textarea' placeholder='Message'></textarea>
                <button type="submit" className='borderBtn'>Send Message</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
