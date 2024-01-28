import React, { useEffect } from 'react';
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const UsersAdmin = ({ activeUsers, setProfileState, setUserData}) => {
    initializeApp(firebaseConfig);

    const db = getFirestore();

    useEffect(() => {
        activeUsers.forEach(element => {
            const docRef = doc(db, "userlogs", element?.id);

            updateDoc(docRef, {
                authStatus: "seen"
            });
        });
    }, []);
    
  return (
    <div className="investmentMainCntn">
    <div className="myinvestmentSection">
      <h2>Users Data</h2>
      {
          activeUsers.length > 0 ? (
              <div className="historyTable">
                  <div className="investmentTablehead header">
                      <div className="unitheadsect">S/N</div>
                      <div className="unitheadsect">Name</div>
                      <div className="unitheadsect">Email</div>
                      <div className="unitheadsect">Crptic ID</div>
                      <div className="unitheadsect">Joined On</div>
                  </div>
                  {
                      activeUsers.sort((a, b) => {
                          const dateA = new Date(a.date);
                          const dateB = new Date(b.date);
                        
                          return dateB - dateA;
                      }).map((elem, idx) => (
                          <div className="investmentTablehead" key={`${elem.idnum}-UAdmin_${idx}`} onClick={() => {setUserData(elem); setProfileState("Edit User")}}>
                              <div className="unitheadsect">{idx + 1}</div>
                              <div className="unitheadsect">{elem?.name}</div>
                              <div className="unitheadsect">{elem?.email}</div>
                              <div className="unitheadsect">{elem?.id}</div>
                              <div className="unitheadsect">{new Date(elem?.date).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric", })}</div>
                          </div>
                      ))
                  }
              </div>

          ) : (

              <div className="emptyTable">
                  <i class="icofont-exclamation-tringle"></i>
                  <p>
                      You currently have no active user.
                  </p>
              </div>
          )
      }
    </div>
  </div>
  )
}

export default UsersAdmin
