function PaymentScreen({ currentScreen, selectPaymentMethod, totalAmount, onNewPayment,retryYesPayment,retryNoPayment }) {

  if (currentScreen === "PAYMENT_METHOD") {
    return (
      <div className="payment-screen">
        <h2>Total: £{totalAmount.toFixed(2)}</h2>
        <h3>Select Payment Method</h3>
        <button onClick={() => selectPaymentMethod("CARD")}> Card</button>
        <button onClick={() => selectPaymentMethod("QR")}>QR</button>
      </div>
    );
  }

  if (currentScreen === "PROCESSING") {
    return (
      <div className="payment-screen">
        <h2>Processing Payment...</h2>
        <p>Total: £{totalAmount.toFixed(2)}</p>
      </div>
    );
  }
  if(currentScreen==="PAYMENT_FAILED"){
    return(
      <>
        <style>
           {` .blink-twice { 
           animation: blinkTwice 2s ease-in-out 2; 
           position:absolute;
           left:550px;
           color:red;
           top:250px;
           } 
          @keyframes blinkTwice 
          { 0% { opacity: 1; } 
          25% { opacity: 0; } 
          50% { opacity: 1; } 
          75% { opacity: 0; } 
          100% { opacity: 1; } } `
          }
       </style>
      
      <div className="blink-twice">
        <h2>Declined x</h2>
      </div>
      </>
    )
  }
  if(currentScreen==='PAYMENT_RETRY'){
    return(
      <div className="retry">
        <h4>Not Succesfull Retry ?</h4>
        <button onClick={retryYesPayment}>Yes</button>
        <button onClick={retryNoPayment}>No</button>
      </div>
    )
  }
  if (currentScreen === "RESULT") {
    return (
      <div className="payment-screen">
        <h2>Online Approved</h2>
        {/* <p>Total Paid: £{totalAmount.toFixed(2)}</p> */}
        {/* <button onClick={onNewPayment}>New Payment</button> */}
      </div>
    );
  }

  

  return null;
}

export default PaymentScreen;
