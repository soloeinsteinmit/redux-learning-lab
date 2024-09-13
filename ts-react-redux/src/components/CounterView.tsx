import type { RootState } from "../app/store";
import { increment, decrement } from "../features/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

const CounterView = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter app with react-redux</h2>
      <button
        aria-label="Increament value"
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
  );
};

export default CounterView;
