import { useState, useRef, useEffect } from 'react'

const FAQ = () => {
    const containerRef = useRef(null);
    const [activeFAQ, setActiveFAQ] = useState(-1);
    const [activeSecVid, setActiveSecVid] = useState(-1);
    const [activeThirdVid, setActivThirdVid] = useState(-1);

    // useEffect(() => {
    //     const container = containerRef.current;
    //     const children = container.children;
    //     [...children].forEach((elem, idx) => {
    //         if(idx !== activeFAQ) {
    //             const currentElement = elem.querySelector("video");
    //             currentElement.pause();
    //             currentElement.currentTime = 0;            
    //         } else {
    //             const currentVideo = children[vlad].querySelector("video");

    //             if (currentVideo.paused) {
    //                 currentVideo.play();
    //                 setActiveVideo(vlad);
    //                 setActiveSecVid(vlad);
    //                 setActivThirdVid(vlad);
    //             } else if (!currentVideo.paused) {
    //                 currentVideo.pause();
    //                 setActiveVideo(vlad);
    //                 setActiveSecVid(-1);
    //                 setActivThirdVid(vlad);
    //             }
    //         }
    //     });

    //     container.children[activeThirdVid]?.scrollIntoView({ behavior: 'smooth', block: "center"});
    // }, [activeFAQ]);

    const handleFAQToggle = (vlad) => {
        if (activeFAQ === vlad) {
            setActiveFAQ(-1);
        } else {
            setActiveFAQ(vlad);
        }
    };

  return (
    <section id='FAQ' className='FAQ'>
        <div className="questionCntn">
            <div className="leftFAQ">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div ref={containerRef} className="rightFAQ">
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 0? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(0)}}>
                        <h3>What Is Crypto?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 0? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Cryptocurrency is a digital or virtual currency that operates on distributed ledger technology called a <span>blockchain</span> and uses <span>cryptography</span> for security. It is decentralized and operates independently of a central bank. Unlike traditional currencies, cryptocurrencies are not backed by a physical commodity or government, and their value is determined by market demand and supply. Cryptocurrencies can be used to buy goods and services, transfer funds, and trade in markets. Popular cryptocurrencies include <span>Bitcoin</span>, <span>Ethereum</span>, <span>Litecoin</span>, <span>Ripple</span>, and <span>Ripple</span>.</p>
                        <p>Many cryptocurrencies, like Bitcoin, are created through a process called <span>mining</span>, which involves solving complex mathematical equations to validate and record transactions on a blockchain. This mechanism is also called <span>Proof of Work (PoW)</span>. Another consensus mechanism that has increased in popularity — as it is more energy efficient — is <span>Proof of Stake (PoS)</span>. Instead of mining, PoS relies on network participants validating transactions. Ethereum, the second-largest cryptocurrency, uses this consensus mechanism.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 1? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(1)}}>
                        <h3>What Is Bitcoin?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 1? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Bitcoin is a cryptocurrency that operates on a <span>peer-to-peer (P2P)</span> network. It was created in 2009 by an unknown person or group using the pseudonym <span>Satoshi Nakamoto</span>. Bitcoin is the first and most well-known cryptocurrency, and it has gained significant popularity and value since its creation. Unlike traditional fiat currency, which is controlled by central banks and governments, Bitcoin operates independently of any central authority. Transactions are verified and recorded on the <span>blockchain</span>, which is a distributed ledger that maintains a permanent and transparent record of all transactions.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 2? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(2)}}>
                        <h3>What Is A ROI?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 2? "180deg": "0deg"}`}} ></i>
                    </div>
                    <div className="answerBody">
                        <p>Return on Investment (ROI) is a popular <span>profitability metric</span> used to evaluate how well an investment has performed. ROI is expressed as a percentage and is calculated by dividing an investment&apos;s net <span>profit (or loss)</span> by its initial cost or outlay. ROI is calculated by subtracting the initial cost of the investment from its final value, then dividing this new number by the cost of the investment, and finally, multiplying it by 100. </p>
                        <p>A $20 item sold for $120 would have profit of $65 and a Return on Investment of 400 i.e <span>50%</span> ROI of <span>$10,000</span> = <span>$5,000</span>, bringing your total money to <span>$15,000</span>.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 3? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(3)}}>
                        <h3>Who Developed Bitcoin?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 3? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>The original Bitcoin code was designed by <span>Satoshi Nakamoto</span> under MIT open source credentials. In 2008 Nakamoto outlined the idea behind Bitcoin in his <span>White Paper</span>, which scientifically described how the cryptocurrency would function. Bitcoin is the first successful digital currency designed with trust in <span>cryptography</span> over central authorities. Satoshi left the Bitcoin code in the hands of developers and the community in 2010. Thus far hundreds of developers have added to the core code throughout the years.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 4? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(4)}}>
                        <h3>What Is Bitcoin Mining?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 4? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Bitcoin mining is analogous to the mining of gold, but its digital form. The process involves specialized computers solving <span>algorithmic equations</span> or <span>hash functions</span>. These problems help miners to confirm blocks of transactions held within the network. Bitcoin mining provides a reward for miners by paying out in Bitcoin in turn the miners confirm transactions on the <span>blockchain</span>. Miners introduce new Bitcoin into the network and also secure the system with transaction confirmation. They are also rewarded network fees for when they harvest new coin and a time when the last bitcoin is found mining will continue.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 5? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(5)}}>
                        <h3>Is Bitcoin Used For Illegal Activities?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 5? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>This is a yet another controversial topic. Because of the freedom and the degree of <span>anonymity</span> that the use of Bitcoin offers, many users who were seeking to purchase or solicit illegal goods or services initially turned to the use of Bitcoin as a method of payment.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 6? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(6)}}>
                        <h3>Can Bitcoin Be Regulated In Any Way?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 6? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Again, when a user decides to use a specific type of software for their Bitcoin wallet, they are deciding what direction the Bitcoin network is heading towards. In other words, you need the cooperation of nearly every single user in order to modify any aspect of the Bitcoin protocol. Hence, Bitcoin transaction is decentralized and can not be regulated by a single body or corporation.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 7? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(7)}}>
                        <h3>Is Bitcoin Anonymous?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 7? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Participants in Bitcoin transactions are identified by <span>public addresses</span> – those are the long strings of around <span>30 characters</span> you see in a person’s Bitcoin address, usually starting with the numerals ‘1’ or ‘3’. For every transaction, the sending and receiving addresses are <span>publicly-viewable</span>.</p>
                    </div>
                </div>
                <div className="unitQuestion" style={{gridTemplateRows: `max-content ${activeFAQ === 8? "1fr": "0px"}`}}>
                    <div className="questionHeading" onClick={() => {handleFAQToggle(8)}}>
                        <h3>How Can I Sell Bitcoins?</h3>
                        <i className="icofont-thin-down" style={{rotate: `${activeFAQ === 8? "180deg": "0deg"}`}}></i>
                    </div>
                    <div className="answerBody">
                        <p>Bitcoins can be sold locally using <span>LocalBitcoins</span>, on <span>Bitcoin brokerages / exchanges</span>, using two-way <span>Bitcoin Teller Machines (BTM’s)</span> or you can pay for a good or service with them. Bitcoins can be sold to just about anyone as long as they have a Bitcoin address, and can be sold for any fiat currency in the world or traded for a physical good. Feel free to check out our recommended list of exchanges and brokerage services to sell your bitcoins online.</p>
                    </div>
                </div>
                <p>Have more questions? <a href="#"> Contact Us</a></p>
            </div>
        </div>
    </section>
  )
}

export default FAQ
