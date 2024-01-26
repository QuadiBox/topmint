import React, { useEffect } from 'react';
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const InvestAdminSect = ({ setInvestData, setProfileState, investments}) => {
    initializeApp(firebaseConfig);

    const db = getFirestore();

    const handleActiveInvestment = (vlad) => {
        const docRef = doc(db, "investments", vlad?.id);

        updateDoc(docRef, {
            status: "Expired",
            roi: vlad?.capital * 5
        });

        setProfileState("Withdrawals");
    };

    useEffect(() => {
        investments.forEach((elem) => {
            if (elem?.status === "Active" && Math.floor((new Date() - new Date(elem?.date)) / (1000 * 60 * 60 * 24)) + 1 >= elem?.duration) {
                handleActiveInvestment(elem);
            }
        });
    }, []);
  return (
    <div className="investmentMainCntn">
      <div className="myinvestmentSection">
        <h2>Investments Stack</h2>
        {
            investments.length > 0 ? (
                <div className="historyTable">
                    <div className="investmentTablehead header">
                        <div className="unitheadsect">S/N</div>
                        <div className="unitheadsect">Plan</div>
                        <div className="unitheadsect">Capital</div>
                        <div className="unitheadsect">Status</div>
                        <div className="unitheadsect">ROI</div>
                        <div className="unitheadsect">Bonus</div>
                    </div>
                    {
                        investments.sort((a, b) => {
                            const dateA = new Date(a.date);
                            const dateB = new Date(b.date);
                          
                            return dateA - dateB;
                        }).map((elem, idx) => (
                            <div className="investmentTablehead" key={elem.idnum} onClick={() => {setInvestData(elem); setProfileState("Edit Investment")}}>
                                <div className="unitheadsect">{idx + 1}</div>
                                <div className="unitheadsect">{elem?.plan}</div>
                                <div className="unitheadsect">${elem?.capital.toLocaleString()}</div>
                                <div className="unitheadsect"><span style={{color: `${elem?.status === "Pending" ? "#F9F871" : elem?.status === "Expired" ? "#DC1262" : "#2DC194"}`}}>{elem?.status}</span></div>
                                <div className="unitheadsect">{elem?.roi}</div>
                                <div className="unitheadsect">${parseInt(elem?.bonus).toLocaleString()}</div>
                            </div>
                        ))
                    }
                </div>

            ) : (

                <div className="emptyTable">
                    <i class="icofont-exclamation-tringle"></i>
                    <p>
                        Your investment stack is currently empty.
                    </p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default InvestAdminSect
