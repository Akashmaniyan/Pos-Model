
function Transaction({CartItems}) {
    const total = CartItems.reduce(
        (sum,item)=>sum+item.price,
        0
    );
  return (
    <div className="transaction-panel">
      <h2>Current Transaction</h2>

      <div className="items-list">
        {CartItems.map(item => (
          <div key={item.id} className="item-row">
            <span>{item.name}</span>
            <span>£{item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="total-section">
        <h3>Total</h3>
        <h1>£{total.toFixed(2)}</h1>
      </div>

      <button className="pay-button" disabled={CartItems.length === 0}>
        Pay
      </button>
    </div>
  );
      
}

export default Transaction;
