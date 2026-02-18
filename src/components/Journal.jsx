function Journal() {
  return (
    <div className="journal-screen">
      <h2>Transaction Journal</h2>

      <div className="transaction-card">
        <h3>£7.00</h3>
        <p>Card • Successful</p>
        <p>14:32</p>
        <p>TXN-001</p>
      </div>

      <div className="journal-nav">
        <button>⬅ Previous</button>
        <button>Next ➡</button>
      </div>

      <button className="back-btn">Back</button>
    </div>
  );
}

export default Journal;
