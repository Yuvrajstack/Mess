import './App.css';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { increment, decrement, reset } from "./redux/counterSlice";

const CounterButtons = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
    <h1>{count}</h1>
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
    </>
  );
};

function App() {
  return (
    <>
    {CounterButtons()}
    </>
  );
}

export default App;
