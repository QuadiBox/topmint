import React from 'react';

const WithdrawAdmin = ({ withdrawals, setProfileState, setWithdrawData}) => {
    
  return (
    <div className="investmentMainCntn">
    <div className="myinvestmentSection">
      <h2>Withrawals Stack</h2>
      {
          withdrawals.length > 0 ? (
              <div className="historyTable">
                  <div className="investmentTablehead header">
                      <div className="unitheadsect">S/N</div>
                      <div className="unitheadsect">Amount</div>
                      <div className="unitheadsect">Transaction Id.</div>
                      <div className="unitheadsect">Register ID</div>
                      <div className="unitheadsect">Status</div>
                      <div className="unitheadsect">Made On</div>
                  </div>
                  {
                      withdrawals.sort((a, b) => {
                          const dateA = new Date(a.date);
                          const dateB = new Date(b.date);
                        
                          return dateA - dateB;
                      }).map((elem, idx) => (
                          <div className="investmentTablehead" key={`${elem.idnum}-UA_${idx}`} onClick={() => {setWithdrawData(elem); setProfileState("Edit Withdraw")}}>
                              <div className="unitheadsect">{idx + 1}</div>
                              <div className="unitheadsect">{elem?.amount}</div>
                              <div className="unitheadsect">{elem?.id}</div>
                              <div className="unitheadsect">{elem?.idnum}</div>
                              <div className="unitheadsect"><span style={{color: `${elem?.status === "Pending" ? "#F9F871" : elem?.status === "Expired" ? "#DC1262" : "#2DC194"}`}}>{elem?.status}</span></div>
                              <div className="unitheadsect">{new Date(elem?.date).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })} | {new Intl.DateTimeFormat('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: false,
                                  }).format(new Date(elem?.date))}</div>
                          </div>
                      ))
                  }
              </div>

          ) : (

              <div className="emptyTable">
                  <i class="icofont-exclamation-tringle"></i>
                  <p>
                      You currently have no data in your withdrawal stack.
                  </p>
              </div>
          )
      }
    </div>
  </div>
  )
}

export default WithdrawAdmin
