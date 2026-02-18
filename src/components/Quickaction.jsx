function Quickaction({onAddcoffe,onAddFruits,onAddcustomamount}) {
  return (
    <div className="quick-actions">
      <h2>Quick Items</h2>

      <button className="quick-btn" onClick={onAddcoffe}> Coffee</button>
      <button className="quick-btn" onClick={onAddFruits}> Fruits</button>
      <button className="quick-btn custom-btn" onClick={onAddcustomamount}> Enter Amount</button>

      <div className="utility-section">
        <button className="utility-btn">Last Receipt</button>
        <button className="utility-btn">View Journal</button>
      </div>
    </div>
  );
}

export default Quickaction;
