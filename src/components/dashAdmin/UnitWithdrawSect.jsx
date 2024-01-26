import React from 'react';
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc, addDoc, collection } from "firebase/firestore";

const UnitWithdrawSect = ({ setProfileState, withdrawData }) => {
    initializeApp(firebaseConfig);

    const db = getFirestore();
    const colRefNotif = collection(db, "notifications");    

    const notificationPush = {
        message: `Your $${withdrawData?.amount} withdrawal transaction has been confirmed. $${withdrawData?.amount} is on its way to your wallet address now`,
        dateTime: new Date().toISOString(),
        idnum: withdrawData.idnum,
        status: "unseen"
    };

    const handleActiveInvestment = () => {
        const docRef = doc(db, "withdrawals", withdrawData?.id);

        updateDoc(docRef, {
            status: "Active",
            date: new Date().toISOString(),
            authStatus: "seen"
        });

        addDoc(colRefNotif, {...notificationPush});

        setProfileState("Withdrawals");
    };


  return (
    <div className="profileMainCntn">
      <div className="profileEditableDisplay">
          <h2>Withdrawal Details</h2>
          <div className="theFormField">
            <div className="unitInputField">
              <label htmlFor="name">Amount</label>
              <input type="text" disabled value={withdrawData?.amount} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Withdrawal Fee</label>
              <input type="text" disabled value={withdrawData?.widthrawalFee} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Withdrawal Status</label>
              <input type="text" disabled value={withdrawData?.status} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Investment Cryptic Id.</label>
              <input type="text" disabled value={withdrawData?.id} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Investment Register Id.</label>
              <input type="text" disabled value={withdrawData?.idnum} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Payment Option</label>
              <input type="text" disabled value={withdrawData?.paymentOption} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Wallet Address</label>
              <input type="text" disabled value={withdrawData?.address} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Date</label>
              <input type="text" disabled value={new Date(withdrawData?.date).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric", }) } />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Time</label>
              <input type="text" disabled value={new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, }).format(new Date(withdrawData?.date))} />
            </div>
            
          </div>

            <div className="flex-align-jusc">
                {
                    withdrawData?.status === "Pending" && (
                        <button type="button" onClick={handleActiveInvestment} className='activateBtn'>Confirm Withdrawal</button>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default UnitWithdrawSect
