

const InvestmentSect = ({ setWidgetState, setInvestData, currentUser, investments}) => {
  const currentDate = new Date();

  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dateString =
    currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth;

    const investProcess = (vlad, clad, blad) => {
        setInvestData({
            idnum: currentUser?.idnum,
            plan: vlad,
            status: "Pending",
            capital: clad,
            date: new Date().toISOString(),
            duration: blad,
            paymentOption: "Bitcoin",
            authStatus: "unseen",
            admin: false,
            roi: 0,
            bonus: 0
        });
        setWidgetState({
            state: true,
            type: "invest",
        })
    }
  return (
    <div className="investmentMainCntn">
      <div className="myinvestmentSection">
        <h2>Investments History</h2>
        {
            investments.length > 0 ? (
                <div className="historyTable">
                    <div className="investmentTablehead header">
                        <div className="unitheadsect">S/N</div>
                        <div className="unitheadsect">Plan</div>
                        <div className="unitheadsect">Capital</div>
                        <div className="unitheadsect">Status</div>
                        <div className="unitheadsect">Days Spent</div>
                        <div className="unitheadsect">Days Remaining</div>
                    </div>
                    {
                        investments.sort((a, b) => {
                          const dateA = new Date(a.date);
                          const dateB = new Date(b.date);
                        
                          return dateB - dateA;
                        }).map((elem, idx) => (
                            <div className="investmentTablehead" key={`${elem.id}-userDash_${idx}`}>
                                <div className="unitheadsect">{idx + 1}</div>
                                <div className="unitheadsect">{elem?.plan}</div>
                                <div className="unitheadsect">${elem?.capital.toLocaleString()}</div>
                                <div className="unitheadsect"><span style={{color: `${elem?.status === "Pending" ? "#F9F871" : elem?.status === "Expired" ? "#DC1262" : "#2DC194"}`}}>{elem?.status}</span></div>
                                <div className="unitheadsect">{elem?.status === "Pending" ? "0" : elem?.status === "Expired" ? "0" : `${Math.floor((new Date(dateString) - new Date(elem?.date)) / (1000 * 60 * 60 * 24)) + 1}`}</div>
                                <div className="unitheadsect">{elem?.status === "Pending" ? `${elem?.duration}` : elem?.status === "Expired" ? "0" : `${elem?.duration - (Math.floor((new Date(dateString) - new Date(elem?.date)) / (1000 * 60 * 60 * 24)) + 1)}`}</div>
                            </div>
                        ))
                    }
                </div>

            ) : (

                <div className="emptyTable">
                    <i class="icofont-exclamation-tringle"></i>
                    <p>
                        Your investment history is currently empty.{" "}
                        <a href="#packages">Invest now</a>
                    </p>
                </div>
            )
        }
        <section className="packages" id="packages">
          <h2>Our Available Packages</h2>
          <div className="packagesCntn">
            <div className="unitPackage">
              <h3>SILVER</h3>
              <h4>
                <span>$100</span> <br /> - <br /> <span>$900</span>
              </h4>
              <ul>
                <li>
                  <i className="icofont-tick-mark"></i> <span>5X ROI</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>5X bonus on investment</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Get ROI and bonus in 2 Days</span>
                </li>
              </ul>
              <button className="borderBtn" onClick={() => {investProcess("Silver", 100, 2)}}>
                Invest
              </button>
            </div>
            <div className="unitPackage fancybg">
              <h3>
                DIAMOND <i class="icofont-diamond"></i>
              </h3>
              <h4>
                <span>$10,000</span> <br /> - <br /> <span>$100,000</span>
              </h4>
              <ul>
                <li>
                  <i className="icofont-tick-mark"></i> <span>5X ROI</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>10X Bonus on investment</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Get ROI and bonus in 7 Days</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Access to 15 of our digital financial resources</span>
                </li>
              </ul>
              <button className="fancyBtn" onClick={() => {investProcess("Diamond", 10000, 7)}}>
                Get Rich
              </button>
            </div>
            <div className="unitPackage">
              <h3>GOLD</h3>
              <h4>
                <span>$1,000</span> <br /> - <br /> <span>$9,000</span>
              </h4>
              <ul>
                <li>
                  <i className="icofont-tick-mark"></i> <span>5X ROI</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>8X Bonus on investment</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Get ROI and bonus in 4 Days</span>
                </li>
                <li>
                  <i className="icofont-tick-mark"></i>{" "}
                  <span>Access to 5 of our digital financial resources</span>
                </li>
              </ul>
              <button className="borderBtn" onClick={() => {investProcess("Gold", 1000, 5)}}>
                Invest
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentSect;
