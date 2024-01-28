import React from 'react'
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc, addDoc, collection } from "firebase/firestore";

const UnitInvestSect = ({ setInvestData, setProfileState, investData }) => {
    initializeApp(firebaseConfig);

    const db = getFirestore();
    const colRefNotif = collection(db, "notifications");    

    const notificationPush = {
        message: `Your $${investData?.capital} ${investData?.plan} investment plan has been activated`,
        dateTime: new Date().toISOString(),
        idnum: investData.idnum,
        status: "unseen"
    };


    const handleDetailUpdate = () => {
        const docRef = doc(db, "investments", investData?.id);

        updateDoc(docRef, {
            roi: investData?.roi,
            authStatus: "seen"
        });

        setProfileState("Investments");
    };

    const handleActiveInvestment = () => {
        const docRef = doc(db, "investments", investData?.id);

        updateDoc(docRef, {
            status: "Active",
            date: new Date().toISOString(),
            authStatus: "seen"
        });

        addDoc(colRefNotif, {...notificationPush}).then(() => {
          setProfileState("Investments");
        })

    };

  return (
    <div className="profileMainCntn">
      <div className="profileEditableDisplay">
          <h2>Investment Details</h2>
          <div className="theFormField">
            <div className="unitInputField">
              <label htmlFor="name">ROI</label>
              <input type="text" value={investData?.roi} onChange={(e) => {setInvestData({...investData, roi: parseInt(e.target.value !== ""? e.target.value : "0")})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Inestment Status</label>
              <input type="text" disabled value={investData?.status} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Plan</label>
              <input type="text" disabled value={investData?.plan} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Capital</label>
              <input type="text" disabled value={investData?.capital} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Investment Cryptic Id.</label>
              <input type="text" disabled value={investData?.id} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Investment Register Id.</label>
              <input type="text" disabled value={investData?.idnum} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Duration</label>
              <input type="text" disabled value={`${investData?.duration} days`} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Payment Option</label>
              <input type="text" disabled value={investData?.paymentOption} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Date</label>
              <input type="text" disabled value={new Date(investData?.date).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric", }) } />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Time</label>
              <input type="text" disabled value={new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, }).format(new Date(investData?.date))} />
            </div>
            
          </div>

            <div className="flex-align-jusc">
                {
                    investData?.status === "Pending" && (
                        <button type="button" onClick={handleActiveInvestment} className='activateBtn'>Activate Investment</button>
                    )
                }
                <button type="button" onClick={handleDetailUpdate}>Update Details</button>
            </div>
        </div>
    </div>
  )
}

export default UnitInvestSect
