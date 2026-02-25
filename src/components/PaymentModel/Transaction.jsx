function Transaction({ cartItems = [], onPayClick ,onDelete,OnIncrease,OnDecrease, selectedItemId, OnSelectedItemId}) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity , 0);

  return (
    <div className="transaction-panel">
      <h2>Transaction</h2>

      <div className="transaction-items">
        {cartItems.map(item => (
          <div key={item.id} className={`item-row ${selectedItemId===item.id ? "selected" : ""}`}
          onClick={()=>OnSelectedItemId(item.id)}
          >
          <span className="item-name">
              {item.name} × {item.quantity || 1}
          </span>
          <span className="item-price">
              £{(item.price * item.quantity || 1).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

        <div className={`qty-controls ${cartItems.length==0 ? "invisible" : ""}`}>
            <button onClick={() => selectedItemId && OnIncrease(selectedItemId)} disabled={!selectedItemId}>+</button>
             <button onClick={() => selectedItemId && OnDecrease(selectedItemId)} disabled={!selectedItemId}>-</button>
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
