function Transaction({ cartItems = [], onPayClick ,onDelete}) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="transaction-panel">
      <h2>Current Transaction</h2>

       <div className="transaction-items">
        {cartItems.map(item => (
      <div key={item.id} className="item-row">
        <span className="item-name">{item.name}</span>
        <span className="item-price">£{item.price}</span>
      </div>
    ))}
  </div>
    <button className="delete" onClick={onDelete}>Void</button>
      <h3>Total: £{total.toFixed(2)}</h3>
      <button className='pay-button' onClick={onPayClick} disabled={cartItems.length === 0}>
        Pay
      </button>
 

    </div>
  );
}

export default Transaction;
