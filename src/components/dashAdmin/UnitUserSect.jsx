import React from 'react'
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const UnitUserSect = ({ userData, setProfileState, setUserData}) => {
    initializeApp(firebaseConfig);

    const db = getFirestore();

    const handleDetailUpdate = () => {
        const docRef = doc(db, "userlogs", userData?.id);

        updateDoc(docRef, {
            name: userData?.name,
            userName: userData?.userName,
            authStatus: "seen"
        });

        setProfileState("Users");
    };




  return (
    <div className="profileMainCntn">
      <div className="profileEditableDisplay">
          <h2>User Details</h2>
          <div className="theFormField">
            <div className="unitInputField">
              <label htmlFor="name">Name</label>
              <input type="text" value={userData?.name} onChange={(e) => {setUserData({...userData, name: e.target.value})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">UserName</label>
              <input type="text" value={userData?.userName} onChange={(e) => {setUserData({...userData, userName: e.target.value})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">User Email</label>
              <input type="text" disabled value={userData?.email} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Account Cryptic Id.</label>
              <input type="text" disabled value={userData?.id} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Account Register Id.</label>
              <input type="text" disabled value={userData?.idnum} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Joined on</label>
              <input type="text" disabled value={new Date(userData?.date).toLocaleDateString("en-US", {day: "numeric", month: "short", year: "numeric", }) } />
            </div>
            
          </div>

            <div className="flex-align-jusc">                   
                <button type="button" onClick={handleDetailUpdate}>Update Details</button>
            </div>
        </div>
    </div>
  )
}

export default UnitUserSect
