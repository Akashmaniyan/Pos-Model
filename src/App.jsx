import { useState } from "react";
import Transaction from "./components/PaymentModel/Transaction"
import Quickaction from "./components/CartPanelModel/Quickaction";
import Customamount from "./components/CartPanelModel/Customamount";
import PaymentScreen from "./components/PaymentModel/PaymentScreen";
import Journal from "./components/JournalViewModel/Journal";
import "./App.css"

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCustomOpen, setIsCustomOpen] = useState(false);

  const [currentScreen, setCurrentScreen] = useState("MAIN"); 
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState("IDLE");
  const [currentJournalIndex, setCurrentJournalIndex] = useState(0);

  const [transactions, setTransactions] = useState([]);

  // Add item to cart
  const addItem = (name, price) => {
    setCartItems(prev => [...prev, { id: Date.now(), name, price }]);
  };

  // Pay button clicked
  const handlePayClick = () => {
    if (cartItems.length === 0) return;
    setCurrentScreen("PAYMENT_METHOD");
  };

  const openjournal = () => {
  if (transactions.length === 0) return;
  setCurrentJournalIndex(transactions.length - 1);
  setCurrentScreen("JOURNAL");
};
//handle declined payemt for retry
const handleRetryYesPayment=()=>{
  setCurrentScreen("PAYMENT_METHOD");
}

//handle declined payment for not retry

const handleRetryNoPayment=()=>{
  setCurrentScreen("MAIN");
  setTransactions(...prev);
}


  // Select payment method
  const selectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
    setCurrentScreen("PROCESSING");
    setPaymentStatus("PROCESSING");
     
    const isSucces=Math.random() > 0.5;
    if(isSucces){

    setTimeout(() => {
      setPaymentStatus("SUCCESS");

      // Save transaction
      setTransactions(prev => [
        ...prev,
        {
          id: Date.now(),
          items: [...cartItems],
          total: cartItems.reduce((sum, item) => sum + item.price, 0),
          method: method,
          status: "SUCCESS",
          time: new Date().toLocaleTimeString(),
        }
      ]);

      // Clear cart
      setCartItems([]);
      setSelectedPaymentMethod(null);
      setCurrentScreen("RESULT");
      setTimeout(()=>{
        setCurrentScreen("MAIN");
      },1500)
    }, 2000); 
  }else{
    setTimeout(()=>{
      setCurrentScreen("PROCESSING");
      setTimeout(()=>{
        setCurrentScreen('PAYMENT_FAILED');

        setTimeout(()=>{
          setCurrentScreen("PAYMENT_RETRY");
        },3000)
      },1000)
    },1500)
    //setCurrentScreen('PAYMENT_FAILED');
  }
  };

  // Start new payment
  const handleNewPayment = () => setCurrentScreen("MAIN");
  const  handleclearclick=()=>setCartItems([]);
  return (
    <>
      {currentScreen === "MAIN" && (
        <div className="pos-container">
          <Transaction cartItems={cartItems} onPayClick={handlePayClick} onDelete={handleclearclick} />
          <Quickaction
            onAddCoffee={() => addItem("Coffee", 3.5)}
            onAddFruit={() => addItem("Fruits", 2.0)}
            onCustomAmount={() => setIsCustomOpen(true)}
            onViewJournal={openjournal}
          />
        </div>
      )}

      {isCustomOpen && (
        <Customamount
          onCancel={() => setIsCustomOpen(false)}
          onConfirm={(amount) => {
            addItem("Groceries Price", amount);
            setIsCustomOpen(false);
          }}
        />
      )}

      {(currentScreen === "PAYMENT_METHOD" || currentScreen === "PROCESSING" || currentScreen === "RESULT") && (
        <PaymentScreen
          currentScreen={currentScreen}
          selectPaymentMethod={selectPaymentMethod}
          paymentStatus={paymentStatus}
          totalAmount={cartItems.reduce((sum, item) => sum + item.price, 0)}
          onNewPayment={handleNewPayment}
        />
      )}
      {(currentScreen==='PAYMENT_FAILED' || currentScreen==='PAYMENT_RETRY' ) &&(
        <PaymentScreen 
        currentScreen={currentScreen}
        retryYesPayment={handleRetryYesPayment}
        retryNoPayment={handleRetryNoPayment}
        />

      )}

    {currentScreen === "JOURNAL" && (
    <Journal
    transactions={transactions}
    index={currentJournalIndex}
    setIndex={setCurrentJournalIndex}
    onBack={() => setCurrentScreen("MAIN")}
    />
    )}

    </>
  );
}

export default App;
