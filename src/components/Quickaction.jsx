function Quickaction({ onAddCoffee, onAddFruit, onCustomAmount,onViewJournal }) {
  return (
    <div className="quick-actions">
      <h2>Quick Items</h2>
      <button onClick={onAddCoffee}> Coffee</button>
      <button onClick={onAddFruit}> Fruits</button>
      <button onClick={onCustomAmount}>Groceries</button>
      <button id="view" onClick={onViewJournal}>
        View Journal
      </button>
      <button id="last" onClick={onViewJournal}>
        Last Receipt
      </button>
    </div>
  );
}

export default Quickaction;
