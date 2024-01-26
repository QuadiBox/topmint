import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, deleteDoc, query, where, collection, onSnapshot } from "firebase/firestore";
import { useRouter } from 'next/router';


const DynamicWidget = ({widgetState, setWidgetState, currentUser, setCurrentUser, investData, setInvestData, setProfileState, withdrawData, setWithdrawData, totalBonus, totalCapital, totaROI}) => {
    const [investments, setInvestments] = useState([]);

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const router = useRouter();
    const handlewidgetClose = () => {
        setWidgetState({...widgetState, state: false});
    };

    const colRef = collection(db, "investments");

    const getSingleDoc = () => {
        const q = query(colRef, where("idnum", "==", currentUser?.idnum));
    
        let books = [];
        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                books.push({...doc.data(), id: doc.id})
            });
            setInvestments(books);
        });
    }

    const handleProceed = (e) => {
        e.preventDefault();
        handlewidgetClose();
        setProfileState("Payments");
    };

    const handleProceedWithdraw = (e) => {
        e.preventDefault();
        handlewidgetClose();
        setProfileState("Withdrawal Payment");
    };

    useEffect(() => {
        getSingleDoc();
    }, []);

    const handleAccoutDelete = () => {
        const docRef = doc(db, "userlogs", currentUser?.id);
        deleteDoc(docRef).then(() => {
            router.push("/signup");
        })
    }

    return (
        <div className="absoluteDynamicWidget">
            {
                widgetState.type === "avatar" && (
                    <div className="avatarSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <h2>Select Avatar</h2>
                        <div className="avatars">
                            <button className="unitAvatar" onClick={() => {setCurrentUser({...currentUser, avatar: "avatar_1"})}}><span></span></button>
                            <button className="unitAvatar" onClick={() => {setCurrentUser({...currentUser, avatar: "avatar_2"})}}><span></span></button>
                        </div>
                        <button type="button" onClick={handlewidgetClose}>Select</button>
                    </div>

                )
            } 
            {
                widgetState.type === "invest" && (
                    <div className="avatarSection investwidgetSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <h2>Initiate Investment</h2>
                        <p>You are about to invest in the <span>{investData?.plan}</span> package which takes a period of <span>{investData?.duration} days</span></p>
                        <div className="investMinmax">
                            {
                                investData?.plan === "Silver" ? "Min. Capital: USD 100 | Max. Capital: USD 900" : investData?.plan === "Gold" ? "Min. Capital: USD 1000 | Max. Capital: USD 9000" : "Min. Capital: USD 10,000 | Max. Capital: USD 100,000"
                            }
                            
                        </div>
                        <form className='widgetInvestForm' onSubmit={handleProceed}>
                            <div className="unitInputField">
                                <label htmlFor="name">Amount to Invest</label>
                                <input type="text" required value={investData?.capital} onChange={(e) => {setInvestData({...investData, capital: parseInt(e.target.value !== ""? e.target.value : "0")})}}/>
                            </div>
                            <div className="unitInputField">
                                <label htmlFor="name">Investment Plan</label>
                                <select required value={investData?.plan} onChange={(e) => {setInvestData({...investData, plan: e.target.value})}}>
                                    <option value="Silver">Silver</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Diamond">Diamond</option>
                                </select>
                            </div>
                            <div className="unitInputField">
                                <label htmlFor="name">Payment Option</label>
                                <select required value={investData?.paymentOption} onChange={(e) => {setInvestData({...investData, paymentOption: e.target.value})}}>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="Etheruem">Ethereum</option>
                                </select>
                            </div>
                            <div className="bottomBtnCntn">
                                <button type="submit">Proceed</button>
                                <button type='button' onClick={handlewidgetClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )
            }
            {
                widgetState.type === "withdraw" && totalCapital >= 100 && (
                    <div className="avatarSection investwidgetSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <h2>Initiate Withdrawal</h2>
                        <p>You are about to widthraw <span>{withdrawData?.amount}</span> from your account.</p>
                        <div className="investMinmax">
                            {
                               "Min. Withdrawable Amount: USD 200"
                            }
                            
                        </div>
                        <form className='widgetInvestForm' onSubmit={handleProceedWithdraw}>
                            <div className="unitInputField">
                                <label htmlFor="name">Amount to Withdraw</label>
                                <input type="text" required value={withdrawData?.amount} onChange={(e) => {setWithdrawData({...withdrawData, amount: parseInt(e.target.value !== ""? e.target.value : "0")})}}/>
                            </div>
                            <div className="unitInputField">
                                <label htmlFor="name">Payment Option</label>
                                <select required value={withdrawData?.paymentOption} onChange={(e) => {setWithdrawData({...withdrawData, paymentOption: e.target.value})}}>
                                    <option value="Bitcoin">Bitcoin</option>
                                    <option value="Etheruem">Ethereum</option>
                                </select>
                            </div>
                            <div className="unitInputField">
                                <label htmlFor="name">Wallet Address</label>
                                <input type="text" required value={withdrawData?.address} onChange={(e) => {setWithdrawData({...withdrawData, address: e.target.value})}}/>
                            </div>
                            <div className="bottomBtnCntn">
                                <button type="submit">Proceed</button>
                                <button type='button' onClick={handlewidgetClose}>Cancel</button>
                            </div>
                        </form>
                    </div>
                )
            }
            {
                widgetState.type === "withdraw" && totalCapital < 100 && (
                    <div className="avatarSection emptySesction">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>

                        <h2>Your Balance is insufficient to make a widthrawal at the moment. Kindly invest or make a deposit.</h2>
                    </div>
                )
            }
            {
                widgetState.type === "delete" && totalCapital < 100 && (
                    <div className="avatarSection investwidgetSection">
                        <span type="button" onClick={handlewidgetClose}><i className="icofont-close-line"></i></span>
                        <i className="icofont-exclamation-tringle" style={{fontSize:"4em",color: "#DC1262"}}></i>
                        <h2>Are you sure you want to delete this account?</h2>
                        <div className="bottomBtnCntn">
                            <button type="submit" onClick={handleAccoutDelete}>Proceed</button>
                            <button type='button' onClick={handlewidgetClose}>Cancel</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default DynamicWidget
