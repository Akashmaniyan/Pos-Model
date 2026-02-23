import { useState } from "react";

function Customamount({ onCancel, onConfirm }) {
  const [amount, setAmount] = useState("");

  const handleEnter = () => {
    if (!amount || Number(amount) <= 0) return;
    onConfirm(Number(amount));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Enter Amount</h2>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="0.00"
        />
        <button className="cancelbutton" onClick={onCancel}>Cancel</button>
        <button onClick={handleEnter}>Enter</button>
      </div>
    </div>
  );
}

export default Customamount;
