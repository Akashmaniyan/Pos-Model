import Transaction from "./Transaction";
import Quickaction from "./Quickaction";
function MainPOS({CartItems,setCartItmes,opencustomamount}) {
    //adding cofee
    const addcoffe=()=>{
        setCartItmes(prev => [
            ...prev,{
                id:Date.now(),
                name:'coffee',
                price:3.50

            }
       ]);
      
    };
    //adding fruits
    const addfruits=()=>{
        setCartItmes(prev => [
            ...prev,{
                id:Date.now(),
                name:'fruits',
                price:1.50

            }
       ]);
    }
  return (
    <div className="pos-container">
      <Transaction CartItems={CartItems} />
      <Quickaction 
       onAddcoffe={addcoffe} 
       onAddFruits={addfruits} 
       onAddcustomamount={opencustomamount}
      />
    </div>
  );
}

export default MainPOS;
