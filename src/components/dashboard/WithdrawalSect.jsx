import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, where, collection, query, onSnapshot } from "firebase/firestore";

const WithdrawalSect = ({currentUser, setWidgetState, totalBonus, totalCapital, totalROI}) => {
    const [withdrawals, setWithdrawals] = useState([]);
    initializeApp(firebaseConfig);

    const db = getFirestore();
    const colRefWith = collection(db, "withdrawals");
    const q3 = query(colRefWith, where("idnum", "==", currentUser?.idnum));

    onSnapshot(q3, (snapshot) => {
        let utilNotif = [];
        snapshot.docs.forEach((doc) => {
        utilNotif.push({ ...doc.data(), id: doc.id });
        });
        setWithdrawals(utilNotif);
    });

  return (
    <div className='widthdrawMainSect'>
        <div className="topmostWithdraw">
            <h2>Total Balance: <span>${`${(currentUser?.bonus + totalROI + totalCapital + totalBonus).toLocaleString()}`}</span></h2>
            <button type="button" onClick={() => {setWidgetState({
                state: true,
                type: "withdraw",
            })}}>Click here to widthraw funds</button>
        </div>
        {
            withdrawals.length > 0 ? (
                <div className="historyTable">
                    <div className="investmentTablehead header">
                        <div className="unitheadsect">S/N</div>
                        <div className="unitheadsect">Transaction ID</div>
                        <div className="unitheadsect">Amount</div>
                        <div className="unitheadsect">Status</div>
                        <div className="unitheadsect">Payment Option</div>
                    </div>
                    {
                        withdrawals.map((elem, idx) => (
                            <div className="investmentTablehead" key={`${elem.idnum}-w${idx}`}>
                                <div className="unitheadsect">{idx + 1}</div>
                                <div className="unitheadsect">{elem?.id}</div>
                                <div className="unitheadsect">${elem?.amount}</div>
                                <div className="unitheadsect"><span style={{color: `${elem?.status === "Pending" ? "#F9F871" : "#2DC194"}`}}>{elem?.status}</span></div>
                                <div className="unitheadsect">{elem?.paymentOption}</div>
                            </div>
                        ))
                    }
                </div>

            ) : (

                <div className="emptyTable">
                    <i class="icofont-exclamation-tringle"></i>
                    <p>
                        Your withdrawal history is currently empty.{" "}
                        <button onClick={() => {setWidgetState({
                            state: true,
                            type: "withdraw",
                        })}}>Withdraw now</button>
                    </p>
                </div>
            )
        }
        <div className="widthdrawalGuides">
            <h2>Withdrawal Guidelines</h2>
            <div className="guides">
                <p>- We have designed our withdrawal process to be as easy as our funding process. To begin the withdrawal process first select your preferred withdrawal method and then type in the amount you want to withdraw and click &quot;Proceed&quot;.</p>
                <p>- We provides two (2) withdrawal methods (Bitcoin, Ethereum Payment).</p>
                <p>- Requests for withdrawals can be made at any time via this website. The requests will be processed immediately, and during the relevant financial institutions&apos; business hours.</p>
                <p>- Withdrawals are capped at the amount of funds that are currently in the account (Minimum withdrawal amount is $200).</p>
                <p>- To make a widthrawal, a withdrawal processing fee is required to paid before a withdrawal can be made.</p>
                <p>- Withdrawal requests are addressed and handled as quickly as possible.</p>
            </div>
        </div>
    </div>
  )
}

export default WithdrawalSect
