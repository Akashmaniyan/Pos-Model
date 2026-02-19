export default function Journal({transactions,index,setIndex,onBack}) {
  const tx = transactions[index];

  return (
    <div className="journal-panel">
      <h2 className="headline">Journal</h2>
      <div className="journal-items">
        <div className="item-time">{tx.time}</ div> <div>--------------------------</div>
        {tx.items.map((item, i) => (
          <div key={i} className="item-row">
            <span>{item.name}</span>
            <span>£{item.price}</span>
          </div>
        ))}
      </div>

      <div className="journal-footer">
        <h3>Total: £{tx.total}</h3>
        <p>Paid via: {tx.method}</p>

        <button disabled={index === 0} onClick={() => setIndex(index - 1)}>Previous</button>

        <button disabled={index === transactions.length - 1}onClick={() => setIndex(index + 1)}>Next</button>

        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}
