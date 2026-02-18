import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPOS from './components/MainPos'
import Customamount from './components/Customamount'
function App() {
  const[CartItems,setCartItmes]=useState([]);
  const[CustomAmountOpen,setCustomAmountOpen]=useState(false);

  const onAddamount=(amount)=>{
    setCartItmes(prev =>[
      ...prev,
      {
        id:Date.now(),
        name:'Groceries Amount',
        price:amount
      }
    ]);
  };
  return(
    <>
      <MainPOS
      CartItems={CartItems}
      setCartItmes={setCartItmes}

      opencustomamount={()=>setCustomAmountOpen(true)}
      />
    
    {CustomAmountOpen && (
      <Customamount 
      onCancel={()=>setCustomAmountOpen(false)}
      onConfirm={(amount)=>{
        onAddamount(amount);
        setCustomAmountOpen(false);
      }}
      />
    )}
  </>
  );


}

export default App
