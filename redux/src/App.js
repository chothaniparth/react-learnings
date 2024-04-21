import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counter/inex'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  console.log(count);
  return (
    <div className="App">
      <div>
      <h1>Count is {count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
