import { AnimatePresence, motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import Navbar from "../components/home/Navbar";
import Link from "next/link";
import DashboardSect from "../components/dashboard/dashboardSect";
import ProfileSect from "../components/dashboard/profileSect";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../database/firebaseConfig";
import {
  getFirestore,
  collection,
  where,
  query,
  onSnapshot,
  doc,
  getDoc
} from "firebase/firestore";
import { useRouter } from "next/router";
import DynamicWidget from "../components/dashboard/dynamicWidget";
import InvestmentSect from "../components/dashboard/investmentSect";
import { themeContext } from "../../providers/ThemeProvider";
import PaymentSect from "../components/dashboard/PaymentSect";
import WithdrawalSect from "../components/dashboard/WithdrawalSect";
import WithdrawalPayment from "../components/dashboard/WithdrawPayment";
import NotificationSect from "../components/dashboard/NotificationSect";

const Profile = () => {
  const [passwordShow, setPasswordShow] = useState(true);
  const [profilestate, setProfileState] = useState("Dashboard");
  const [bitPrice, setBitPrice] = useState("");
  const [ethPrice, setEthPrice] = useState("");
  const [investments, setInvestments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const [showsidePanel, setShowSidePanel] = useState(true);

  const ctx = useContext(themeContext);
  const { setregisterFromPath } = ctx;
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "avatar_1",
    email: "",
    password: "",
    balance: 50,
    date: dateString,
    accountStatus: "No Active Plan",
    investmentCount: 0,
    referralCount: 0,
    admin: false,
    idnum: 101010,
    userName: "John Doe",
    authStatus: "unseen"
  });

  const [investData, setInvestData] = useState({
    idnum: currentUser?.idnum,
    plan: "Gold",
    status: "Pending",
    capital: 0,
    date: new Date().toISOString(),
    duration: 5,
    paymentOption: "Bitcoin",
    roi: 0,
    bonus: 0,
    authStatus: "unseen",
    admin: false,
  });
  const [withdrawData, setWithdrawData] = useState({
    idnum: currentUser?.idnum,
    status: "Pending",
    amount: 200,
    date: new Date().toISOString(),
    paymentOption: "Bitcoin",
    authStatus: "unseen",
    admin: false,
    address: "****************"
  });
  const [widgetState, setWidgetState] = useState({
    state: false,
    type: "avatar",
  });

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const colRef = collection(db, "investments");
  const q = query(colRef, where("idnum", "==", currentUser?.idnum));

  let books = [];
  onSnapshot(q, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    setInvestments(books);
  });

  const colRefNotif = collection(db, "notifications");
  const q2 = query(colRefNotif, where("idnum", "==", currentUser?.idnum));

  onSnapshot(q2, (snapshot) => {
    let utilNotif = [];
    snapshot.docs.forEach((doc) => {
      utilNotif.push({ ...doc.data(), id: doc.id });
    });
    setNotifications(utilNotif);
  });

  const router = useRouter();
  async function fetchData(path, stateSetter) {
    try {
      const response = await fetch(path, setBitPrice);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (stateSetter === setBitPrice) {
        stateSetter(data["USD"].last);
      } else {
        stateSetter(data["price_24h"]);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    fetchData(
      "https://api.blockchain.com/v3/exchange/tickers/ETH-USD",
      setEthPrice
    );
    fetchData("https://blockchain.info/ticker", setBitPrice);

    setShowSidePanel(false)
  }, [profilestate]);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("activeUser")) || {};
    if (user.id) {
      const docRef = doc(db, "userlogs", user.id);

      getDoc(docRef).then((doc) => {
        if (doc.data()) {
          setCurrentUser({...doc.data(), id: doc.id});
          sessionStorage.setItem("activeUser", JSON.stringify({...doc.data(), id: doc.id}));
        } else {
          setregisterFromPath("/profile");
          router.push("/signin");
        }
      })
    } else {
      setregisterFromPath("/profile");
      router.push("/signin");
    }
  }, []);

  const handleLogOut = () => {
    router.push("/signin");
    setCurrentUser({});
    sessionStorage.removeItem("activeUser");
  };


  //user dashboard values
  const totalCapital = investments
    .filter((elem) => elem?.status !== "Pending")
    .reduce((sum, currentObject) => {
      // Ensure that currentObject.capital is a number before adding it to the sum
      const capitalValue =
        typeof currentObject.capital === "number" ? currentObject.capital : 0;

      // Add the capital value to the sum
      return sum + capitalValue;
    }, 0);

  const totalROI = investments
    .filter((elem) => elem?.status !== "Pending")
    .reduce((sum, currentObject) => {
      // Ensure that currentObject.capital is a number before adding it to the sum
      const ROIvalue =
        typeof currentObject.roi === "number" ? currentObject.roi : 0;

      // Add the capital value to the sum
      return sum + ROIvalue;
    }, 0);

  const totalBonus = investments
    .filter((elem) => elem?.status !== "Pending")
    .reduce((sum, currentObject) => {
      // Ensure that currentObject.capital is a number before adding it to the sum
      const bonusValue =
        typeof currentObject.bonus === "number" ? currentObject.bonus : 0;

      // Add the capital value to the sum
      return sum + bonusValue;
    }, 0);

  useEffect(() => {
    fetchData(
      "https://api.blockchain.com/v3/exchange/tickers/ETH-USD",
      setEthPrice
    );
    fetchData("https://blockchain.info/ticker", setBitPrice);
  }, []);

  //Animation variable
  const swipeParent = {
    init: {
      x: "-110%",
      opacity: 0,
    },
    finale: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-111%",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200,
        when: "afterChildren",
      },
    },
  };

  return (
    <div className="mainprofileSect">
      <div id="mobilenone" className="leftProfile">
        <div className="topmostRightPrile">
          <Link href={"/"}>
            <img src="/topmintLogo.png" className="theLogo" alt="logo" />
          </Link>
          <div className="panelPrfileDisp">
            <div
              className="left"
              style={{ backgroundImage: `url(/${currentUser?.avatar}.png)` }}
            ></div>
            <div className="right">
              <h3>{currentUser?.name}</h3>
              <p>{currentUser?.email}</p>
            </div>
          </div>
        </div>
        <div className="centerRightProfile">
          <ul>
            <li
              className={profilestate === "Dashboard" ? "active" : ""}
              onClick={() => {
                setProfileState("Dashboard");
              }}
            >
              <i className="icofont-dashboard-web"></i> Dashboard
            </li>
            <li
              className={profilestate === "Profile" ? "active" : ""}
              onClick={() => {
                setProfileState("Profile");
              }}
            >
              <i className="icofont-ui-user"></i> Profile
            </li>
            <li
              className={profilestate === "Investments" ? "active" : ""}
              onClick={() => {
                setProfileState("Investments");
              }}
            >
              <i className="icofont-money-bag"></i> Investments
            </li>
            <li
              className={profilestate === "Withdrawals" ? "active" : ""}
              onClick={() => {
                setProfileState("Withdrawals");
              }}
            >
              <i className="icofont-pay"></i> Withdrawals
            </li>
            <li
              className={profilestate === "Notifications" ? "active" : ""}
              onClick={() => {
                setProfileState("Notifications");
              }}
            >
              <i className="icofont-alarm"></i> Notifications{" "}
              <span>
                {notifications.filter((elem) => elem?.status !== "seen").length}
              </span>
            </li>
            <Link href={"/contact"}>
              <i className="icofont-ui-text-loading"></i> Feedback
            </Link>
          </ul>
        </div>
        <div className="rightLeftProfile">
          <button className="borderBtn" onClick={handleLogOut}>
            Log Out <i className="icofont-logout"></i>{" "}
          </button>
        </div>
      </div>
      <div className="rightProfile">
        <h1>
          {profilestate}{" "}
          <span>
            {new Date().toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
            .
          </span>
        </h1>
        <div className="topmostRightProfile">
          <div className="unitUserEarningDisplay fancybg">
            <h3>
              Total Earnings{" "}
              <span
                onClick={() => {
                  setPasswordShow((prev) => !prev);
                }}
              >
                <i
                  className={`icofont-eye-${!passwordShow ? "alt" : "blocked"}`}
                ></i>
              </span>
            </h3>
            <h2>
              $
              {passwordShow
                ? `${(
                    currentUser?.bonus +
                    totalROI +
                    totalCapital +
                    totalBonus
                  ).toLocaleString()}`
                : "******"}
            </h2>
          </div>
          <div className="unitUserEarningDisplay fancybg">
            <h3>Bonuses</h3>
            <h2>
              $
              {passwordShow
                ? `${(currentUser?.bonus + totalBonus).toLocaleString()}`
                : "******"}
            </h2>
          </div>
          <div className="unitUserEarningDisplay fancybg">
            <h3>Returns</h3>
            <h2>${passwordShow ? `${totalROI.toLocaleString()}` : "******"}</h2>
          </div>
          <div className="unitUserEarningDisplay fancybg">
            <h3>Active / Pending Plans</h3>
            <h2>{investments.length}</h2>
          </div>
        </div>
        {profilestate === "Dashboard" && (
          <DashboardSect
            setWidgetState={setWidgetState}
            currentUser={currentUser}
            setInvestData={setInvestData}
          />
        )}
        {profilestate === "Profile" && (
          <ProfileSect
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            widgetState={widgetState}
            setWidgetState={setWidgetState}
          />
        )}
        {profilestate === "Investments" && (
          <InvestmentSect
            widgetState={widgetState}
            setWidgetState={setWidgetState}
            investData={investData}
            setInvestData={setInvestData}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            investments={investments}
          />
        )}
        {profilestate === "Notifications" && (
          <NotificationSect
            setWidgetState={setWidgetState}
            investData={investData}
            setInvestData={setInvestData}
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            notifications={notifications}
          />
        )}
        {profilestate === "Withdrawals" && (
          <WithdrawalSect
            currentUser={currentUser}
            setWidgetState={setWidgetState}
            totalBonus={totalBonus}
            totalCapital={totalCapital}
            totalROI={totalROI}
          />
        )}
        {profilestate === "Payments" && (
          <PaymentSect
            setProfileState={setProfileState}
            investData={investData}
            bitPrice={bitPrice}
            ethPrice={ethPrice}
          />
        )}
        {profilestate === "Withdrawal Payment" && (
          <WithdrawalPayment
            setProfileState={setProfileState}
            withdrawData={withdrawData}
            bitPrice={bitPrice}
            ethPrice={ethPrice}
            currentUser={currentUser}
          />
        )}
        <footer className="profilefooter">
          <p>
            Proudly powered by{" "}
            <a
              href="https://www.tradingview.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trading view
            </a>
          </p>
          <p>|</p>
          <p>
            <i class="icofont-shield-alt"></i> Protected by{" "}
            <a
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/cloudflare.png" alt="cloudflare" />
            </a>
          </p>
        </footer>
      </div>
      <button
        id="floatingButton"
        type="button"
        className="menuBtn floatingBtn"
        onClick={() => {
          setShowSidePanel(true);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {widgetState.state && (
        <DynamicWidget
          widgetState={widgetState}
          setWidgetState={setWidgetState}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          investData={investData}
          setInvestData={setInvestData}
          setProfileState={setProfileState}
          withdrawData={withdrawData}
          setWithdrawData={setWithdrawData}
          totalBonus={totalBonus}
          totalCapital={totalCapital}
          totalROI={totalROI}
        />
      )}


      <AnimatePresence>
        {showsidePanel && (
          <motion.div 
            id="mobilepop" 
            className="leftProfile"
            initial="init"
            animate="finale"
            exit="exit"
            variants={swipeParent}
          >
            <div className="topmostRightPrile">
              <Link href={"/"}>
                <img src="/topmintLogo.png" className="theLogo" alt="logo" />
              </Link>
              <div className="panelPrfileDisp">
                <div
                  className="left"
                  style={{ backgroundImage: `url(/${currentUser?.avatar}.png)` }}
                ></div>
                <div className="right">
                  <h3>{currentUser?.name}</h3>
                  <p>{currentUser?.email}</p>
                </div>
              </div>
            </div>
            <div className="centerRightProfile">
              <ul>
                <li
                  className={profilestate === "Dashboard" ? "active" : ""}
                  onClick={() => {
                    setProfileState("Dashboard");
                  }}
                >
                  <i className="icofont-dashboard-web"></i> Dashboard
                </li>
                <li
                  className={profilestate === "Profile" ? "active" : ""}
                  onClick={() => {
                    setProfileState("Profile");
                  }}
                >
                  <i className="icofont-ui-user"></i> Profile
                </li>
                <li
                  className={profilestate === "Investments" ? "active" : ""}
                  onClick={() => {
                    setProfileState("Investments");
                  }}
                >
                  <i className="icofont-money-bag"></i> Investments
                </li>
                <li
                  className={profilestate === "Withdrawals" ? "active" : ""}
                  onClick={() => {
                    setProfileState("Withdrawals");
                  }}
                >
                  <i className="icofont-pay"></i> Withdrawals
                </li>
                <li
                  className={profilestate === "Notifications" ? "active" : ""}
                  onClick={() => {
                    setProfileState("Notifications");
                  }}
                >
                  <i className="icofont-alarm"></i> Notifications{" "}
                  <span>
                    {
                      notifications.filter((elem) => elem?.status !== "seen")
                        .length
                    }
                  </span>
                </li>
                <Link href={"/contact"}>
                  <i className="icofont-ui-text-loading"></i> Feedback
                </Link>
              </ul>
            </div>
            <div className="rightLeftProfile">
              <button className="borderBtn" onClick={handleLogOut}>
                Log Out <i className="icofont-logout"></i>{" "}
              </button>
            </div>

            <button type="button" className="panelCloseBtn" onClick={() => {setShowSidePanel(false)}}><i class="icofont-close-line"></i></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Profile;
