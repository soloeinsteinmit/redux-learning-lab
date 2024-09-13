import { useSelector, useDispatch } from "react-redux";
import { orderCake, restockCake } from "../features/cake/cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(orderCake());
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          dispatch(restockCake(5));
        }}
      >
        Restock cakes
      </button>
    </div>
  );
};

export default CakeView;
