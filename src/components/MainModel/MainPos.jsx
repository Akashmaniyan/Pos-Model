import Transaction from "../PaymentModel/Transaction";
import Quickaction from "../CartPanelModel/Quickaction";

function MainPOS({ CartItems, addItem, openCustomAmount, onPayClick }) {
  const addCoffee = () => 
    console.log('clicked')
    addItem("Coffee", 3.5);
  const addFruit = () => addItem("Fruits", 2.0);

  return (
    <div className="pos-container">
      <Transaction CartItems={CartItems} onPayClick={onPayClick} />
      <Quickaction
        onAddCoffee={addCoffee}
        onAddFruit={addFruit}
        onCustomAmount={openCustomAmount}
        onViewJournal={onViewJournal}
      />
    </div>
  );
}
export default MainPOS;