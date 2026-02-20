function PaymentScreen({ currentScreen, selectPaymentMethod, totalAmount, onNewPayment }) {
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
