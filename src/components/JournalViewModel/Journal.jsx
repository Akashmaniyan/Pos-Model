export default function Journal({transactions,index,setIndex,onBack}) {
  const tx = transactions[index];

  return (
    <div className="journal-panel">
      <h2 className="headline">Journal</h2>
      <div className="journal-items">
        <div className="Date"><>Date :</>{new Date().toLocaleDateString()}</div>
        <div className="item-time"><>Time :</>{tx.time}</ div> <div>--------------------------</div>
        {tx.items.map((item, i) => (
          <div key={i} className="item-row">
            <span>{item.quantity} X {item.name}</span>
            <span>£{item.price*item.quantity}</span>
          </div>
        ))}
      </div>
  
      <div className="journal-footer">
       <h3>Total: £{tx.total}</h3>
       <p>Paid via: {tx.method}</p>

        <div className="button-row">
        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button>
        <button disabled={index === transactions.length - 1} onClick={() => setIndex(index + 1)}>Next</button>
        <button>Print</button>
        <button className="back-btn" onClick={onBack}>back</button>
      </div>
   </div>

     
    </div>
  );
}
