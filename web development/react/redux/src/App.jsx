
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset,incrementByAmount } from './features/counter/counter';
import { useState } from 'react';


function App() {
  const [amount, setamount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch =useDispatch();


  function handelIncrementClick(){
    dispatch(increment());
  }

  function handelDecrementClick(){
    dispatch(decrement());
  }

  function handelResetClick(){
    dispatch(reset());
  }

  function handelIncamountClick(){
    dispatch(incrementByAmount(amount));
  }


  return (

  <div className='container'>
    <button onClick={handelIncrementClick}>+</button>
    <p>count: {count}</p>
    <button onClick={handelDecrementClick}>-</button>
    <br /><br />
    <button onClick={handelResetClick}>reset</button>
    <input type='Number' value={amount} onChange={(e) => setamount(e.target.value)}></input>
    <br /><br />
    <button onClick={handelIncamountClick}>inc by amount</button>
  </div>      
  )
}

export default App
