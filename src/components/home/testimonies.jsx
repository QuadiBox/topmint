import { useState, useRef, useEffect } from 'react'

const Testimonies = () => {
    const containerRef = useRef(null);
    const [activeVideo, setActiveVideo] = useState(-1);
    const [activeSecVid, setActiveSecVid] = useState(-1);
    const [activeThirdVid, setActivThirdVid] = useState(-1);

    useEffect(() => {
        const container = containerRef.current;
        const scrollPercent = container.scrollWidth * 0.1;

        container.children[activeThirdVid]?.scrollIntoView({ behavior: 'smooth', block: "center"});
    }, [activeThirdVid]);

    const handleVideoplay = (vlad) => {
        const container = containerRef.current;

        const children = container.children;
        [...children].forEach((elem, idx) => {
            if(idx !== vlad) {
                const currentElement = elem.querySelector("video");
                currentElement.pause();
                currentElement.currentTime = 0;            
            } else {
                const currentVideo = children[vlad].querySelector("video");

                if (currentVideo.paused) {
                    currentVideo.play();
                    setActiveVideo(vlad);
                    setActiveSecVid(vlad);
                    setActivThirdVid(vlad);
                } else if (!currentVideo.paused) {
                    currentVideo.pause();
                    setActiveVideo(vlad);
                    setActiveSecVid(-1);
                    setActivThirdVid(vlad);
                }
            }
        });
        
    }

  return (
    <section className='testimonies'>
        <h2>Our Word is Our Bond</h2>
        <p>Here is what our investors say about us</p>
        <div className="videograndCntn">
            <div ref={containerRef} className="videoTestimonies">
                <div className={`unittestimony ${activeVideo === 0? "active": ""}`}>
                    <video className='active' src="/user_video1.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(0)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 0? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 1? "active": ""}`}>
                    <video className='active' src="/user_video2.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(1)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 1? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 2? "active": ""}`}>
                    <video className='active' src="/user_video4.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(2)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 2? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 3? "active": ""}`}>
                    <video className='active' src="/user_video3.mp4" poster='/trust_3.jpg' onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(3)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 3? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 4? "active": ""}`}>
                    <video className='active' src="/user_video5.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(4)}}>
                    <button type="button"><i className={`icofont-ui-${activeSecVid === 4? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 5? "active": ""}`}>
                    <video className='active' src="/user_video1.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(5)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 5? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 6? "active": ""}`}>
                    <video className='active' src="/user_video2.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(6)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 6? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 7? "active": ""}`}>
                    <video className='active' src="/user_video4.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(7)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 7? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 8? "active": ""}`}>
                    <video className='active' src="/user_video3.mp4" poster='/trust_3.jpg' onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(8)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 8? "pause": "play"}`}></i></button>
                    </div>
                </div>
                <div className={`unittestimony ${activeVideo === 9? "active": ""}`}>
                    <video className='active' src="/user_video5.mp4" onEnded={() => {setActiveSecVid(-1); setActiveVideo(-1)}}></video>
                    <div className="overlay" onClick={() => {handleVideoplay(9)}}>
                        <button type="button"><i className={`icofont-ui-${activeSecVid === 9? "pause": "play"}`}></i></button>
                    </div>
                </div>

            </div>
            <div className="scrollbtncntn">
                <button style={{opacity: `${activeThirdVid === 0? "1": 0.5}`}} onClick={() => {setActivThirdVid(0)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 1? "1": 0.5}`}} onClick={() => {setActivThirdVid(1)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 2? "1": 0.5}`}} onClick={() => {setActivThirdVid(2)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 3? "1": 0.5}`}} onClick={() => {setActivThirdVid(3)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 4? "1": 0.5}`}} onClick={() => {setActivThirdVid(4)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 5? "1": 0.5}`}} onClick={() => {setActivThirdVid(5)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 6? "1": 0.5}`}} onClick={() => {setActivThirdVid(6)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 7? "1": 0.5}`}} onClick={() => {setActivThirdVid(7)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 8? "1": 0.5}`}} onClick={() => {setActivThirdVid(8)}} className='scrollBtn' type="button" ></button>
                <button style={{opacity: `${activeThirdVid === 9? "1": 0.5}`}} onClick={() => {setActivThirdVid(9)}} className='scrollBtn' type="button" ></button>
            </div>

        </div>
        <div className="intersect">
            <p>Words on the street</p>
        </div>
        <div className="videograndCntn">
            <div className="videoTestimonies">
                <div class="user_testimony">
                    <h4>
                        &quot; Best trading platform ever with amazing and easy to use interface. I don&apos;t think I can sell their services enough, let my account balance do it for me.&quot;
                    </h4>
                    <p>
                        <span class="color-blue">Henry dever</span> - United Kingdom
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot;This platform is the best I&apos;ll give them that, making decent amount of money week in week out and making withdrawals is just about as easy as they come. &quot;
                    </h4>
                    <p>
                        <span class="color-blue">Sujani Devabathini Bandi</span> - India
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot;I&apos;m so excited, I give gratitude to the entire staff of topmints Investment, I have received my profit of $4000, thank you all especially to my manager..&quot;
                    </h4>
                    <p>
                        <span class="color-blue">Jordan brooks Thomas</span> - USA
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot;This is what you call online trading, I had doubt at first but I decided to try with just little and watched it grow to something big. Thank You topmints Investment. .&quot;
                    </h4>
                    <p>
                        <span class="color-blue">Mary Matt&apos;s weiser</span> - USA
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot;I&apos;ve joined a lot of trading websites. topmints Investment is the only one that has consistently made me profit in the long term. very happy customer and I will be buying Gold Plan this weekend so that should say it all!&quot;
                    </h4>
                    <p>
                        <span class="color-blue">TASHA LEWIS</span> - South Africa
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot; Great service! I have been worried about investing. But when I came here. I don&apos;t have to worry anymore.&quot;
                    </h4>
                    <p>
                        <span class="color-blue">JOY KELLY</span> - United Kingdom
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                    &quot; My brother recommended www.topmintinvest.com to me, and I am very happy to get profit by their trading service.&quot;
                    </h4>
                    <p>
                        <span class="color-blue">BILLY MADAN</span> - USA
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                        &quot;OMG! I only started using topmints Investment a month back and i just cannot belive by how much my balance has grown. www.topmintinvest.com Rocks! &quot;
                    </h4>
                    <p>
                        <span class="color-blue">Jane Matthew</span> - Canada
                    </p>
                </div>
                <div class="user_testimony">
                    <h4>
                    &quot;This is one of the best companies I&apos;ve invested in, they give high profits and they are responsible for any loss. Thank you topmints Investment .&quot;
                    </h4>
                    <p>
                        <span class="color-blue">Bongani Kubeka</span> - Botswana
                    </p>
                </div>
            
            </div>
        </div>
      
    </section>
  )
}

export default Testimonies
