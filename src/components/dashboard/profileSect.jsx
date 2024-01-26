import {useState} from "react";
import { initializeApp } from "firebase/app"
import { firebaseConfig } from "../../database/firebaseConfig";
import { getFirestore, doc, updateDoc, getDoc } from "firebase/firestore";


const ProfileSect = ({ currentUser, setCurrentUser, widgetState, setWidgetState}) => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [passwordchange, setpasswordchange] = useState({
        old: "",
        new: "",
        msg: "",
        color: "#DC1262",
    })
    const removeErr = () => {
        setTimeout(() => {
            setpasswordchange({
                old: "",
                new: "",
                msg: "",
                color: "#DC1262",
            })
        }, 3500);
    }

    initializeApp(firebaseConfig);

    const db = getFirestore();

    const handleDetailUpdate = () => {
        const docRef = doc(db, "userlogs", currentUser?.id)

        updateDoc(docRef, {
            name: currentUser?.name,
            userName: currentUser?.userName,
            avatar: currentUser?.avatar,
            dateUpdated: new Date().toISOString()
        });
        sessionStorage.setItem("activeUser", JSON.stringify(currentUser));
    }

    const handlePasswordChnage = () => {
        const docRef = doc(db, "userlogs", currentUser?.id)
        getDoc(docRef).then((doc) => {
            if(doc.data().password === passwordchange.old && passwordchange.new !== "") {
                updateDoc(docRef, {
                    password: passwordchange?.new
                }).then(() => {
                    setpasswordchange({...passwordchange, msg: "Password updated successfully.", color: "green"});
                    removeErr();
                });
            } else {
                setpasswordchange({...passwordchange, msg: "Invalid old password or new password", color: "#DC1262"})
            }
        })
    }
  return (

    <>
      <div className="profileMainCntn">
        <div className="topmostProfileMainDisplay">
          <h2>Welcome back, {currentUser?.userName}.</h2>
          <div className="profileUtilCntn">
            <div className="profilepix" style={{backgroundImage: `url(/${currentUser?.avatar}.png)`}} onClick={() => {setWidgetState({...widgetState, state: true})}}></div>
            <div className="profilebasicdata">
              <h3>{currentUser?.name}</h3>
              <p>{currentUser?.email}</p>
            </div>
          </div>
        </div>
        <div className="profileEditableDisplay">
          <h2>Profile Details</h2>
          <div className="theFormField">
            <div className="unitInputField">
              <label htmlFor="name">Fullname</label>
              <input type="text" value={currentUser?.name} onChange={(e) => {setCurrentUser({...currentUser, name: e.target.value})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Username</label>
              <input type="text" value={currentUser?.userName} onChange={(e) => {setCurrentUser({...currentUser, userName: e.target.value})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Email Address</label>
              <input type="text" disabled value={currentUser?.email} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Account Cryptic Id.</label>
              <input type="text" disabled value={currentUser?.id} />
            </div>
            <div className="unitInputField">
              <label htmlFor="name">Account Register Id.</label>
              <input type="text" disabled value={currentUser?.idnum} />
            </div>
            
          </div>
          <button type="button" onClick={handleDetailUpdate}>Update Details</button>
        </div>
        <div className="profileEditableDisplay">
          <h2>Change Password</h2>
          <div className="theFormField">
            <div className="unitInputField">
              <label htmlFor="name">Old Password</label>
              <input type="text" onChange={(e) => {setpasswordchange({...passwordchange, old: e.target.value})}}/>
            </div>
            <div className="unitInputField">
              <label htmlFor="name">New Password</label>
              <input type={passwordShow ? "text": "password"} onChange={(e) => {setpasswordchange({...passwordchange, new: e.target.value})}}/>
              <span onClick={() => {setPasswordShow(prev => !prev)}}><i className={`icofont-eye-${!passwordShow? "alt": "blocked"}`}></i></span>
            </div>
            <p style={{color: `${passwordchange?.color}`}}>{passwordchange?.msg}</p>
          </div>
          <button type="button" onClick={handlePasswordChnage}>Update Password</button>
        </div>
      </div>
    </>
  );
};

export default ProfileSect;
