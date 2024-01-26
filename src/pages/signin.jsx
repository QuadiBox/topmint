import { useState, useRef, useEffect, useContext } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { initializeApp } from "firebase/app"
import { firebaseConfig } from '../database/firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import { themeContext } from '../../providers/ThemeProvider';
import { useRouter } from 'next/router';
import Head from 'next/head';



const Signin = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [users, setUsers] = useState([]);
    const [errMsg, setErrMsg] = useState("");

    const [verify, setVerify] = useState("Default");
    const inputRef = useRef(null);

    const router = useRouter();

    const ctx = useContext(themeContext);
    const { registerFromPath } = ctx;

    const [toLocaleStorage, setToLocalStorage] = useState({
        email: "",
        password: "",
    });

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, "userlogs");

    const handleVerify = () => {
        if (verify === "Default") {
            setVerify("verifying");
            setTimeout(() => {
                setVerify("verified");
                inputRef.current.checked = true;
            }, 3000);

        } else {
            inputRef.current.checked = true;
        }
    }
    const removeErr = () => {
        setTimeout(() => {
            setErrMsg("");
        }, 3000);
    }

    
    useEffect(() => {

        if (Object.keys(JSON.parse(sessionStorage.getItem("activeUser")) || {}).length > 0) {
            setErrMsg("An account is currently logged in")
            removeErr();
        }

    }, []);

    const getSingleDoc = (e) => {
        const q = query(colRef, where("email", "==", `${toLocaleStorage.email}`));
    
        let books = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(), id: doc.id})
            });
            const activeUser = books?.filter((elem) => elem.password === toLocaleStorage.password);
            if (activeUser.length <= 0) {
                setErrMsg("Incorrect password or email");
                removeErr();
            } else {
                sessionStorage.setItem("activeUser", JSON.stringify({...activeUser[0], password: "******"}));
                e.target.reset();
                setVerify("Default");
                router.push(registerFromPath);
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        getSingleDoc(e);
    };


    return (
        <div className='signupCntn'>
            <Head>
                <title>Sign In</title>
                <meta property="og:title" content="Sign In"/>
            </Head>
                <div className="leftSide">
                        <video src="signup_vid2.mp4" autoPlay loop muted></video>
                        <div className="overlay">
                            <h2>&quot;Look First -<br /> Then Leap.&quot;</h2>
                            <p><span>--</span>  Alex Hennold  <span>--</span></p>
                        </div>
                </div>
                <div className="righside">
                    <form onSubmit={handleSubmit}>
                        <Link href={"/"} className='topsignuplink'><img src="/topmintLogo.png" alt="logo" /></Link>
                        <h1>Sign In with Email</h1>
                        <div className="inputcontainer">
                            <div className="inputCntn">
                                <input onChange={(e) => {setToLocalStorage({...toLocaleStorage, email: e.target.value})}} type='email' name='email' placeholder='Email' required/>
                                <span><i className="icofont-ui-email"></i></span>
                            </div>
                            <div className="passcntn">
                                <input onChange={(e) => {setToLocalStorage({...toLocaleStorage, password: e.target.value})}} type={`${passwordShow? "text": "password"}`} name='password' placeholder='Password' required/>
                                <button onClick={() => {setPasswordShow(prev => !prev)}}><i className={`icofont-eye-${!passwordShow? "alt": "blocked"}`}></i></button>
                            </div>

                            <div className="_cloudflr_verifcation_widget">
                                <div className="verification_Box">
                                    <div className="checkbox_cntn" onClick={handleVerify}>
                                        <input ref={inputRef} type="checkbox" required/>
                                        {verify === "Default" && (<span aria-hidden="true" className="unchecked"></span>)}
                                        {verify === "verifying" && (<i aria-hidden="true" className="icofont-spinner-alt-2"></i>)}
                                        {verify === "verified" && (<i aria-hidden="true" className="icofont-check-circled"></i>)}
                                    </div>
                                    <div className="verification_status">
                                        {verify === "Default" && (<p>Human Verification</p>)}
                                        {verify === "verifying" && (<p>Verifying...</p>)}
                                        {verify === "verified" && (<p>Verified</p>)}

                                    </div>
                                </div>
                                <div className="service_provider">
                                    <p>Protected by <img src="/cloudflare.png" alt="cloudflare" /></p>
                                </div>
                            </div>
                            {
                                errMsg !== "" && (
                                    <p className='errorMsg'>{errMsg}</p>
                                )
                            }
                            <label className="form-control2">
                                <input type="checkbox"  name="checkbox" required/> Remember me
                            </label>

                            <button type="submit" className='fancyBtn'>Sign In</button>


                        </div>
                        <p className='haveanaccount'>Are you an admin? <Link href={"/signin_admin"}>Sign In as admin</Link></p>
                        <p className='haveanaccount'>Don&apos;t have an account? <Link href={"/signup"}>Sign Up</Link></p>

                    </form>
                </div>
        </div>
    )
}

export default Signin
