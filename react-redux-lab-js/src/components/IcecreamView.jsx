import { useSelector, useDispatch } from "react-redux";
import {
  orderIcecream,
  restockIcecream,
} from "../features/icecream/icecreamSlice";

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of ice-creams - {numOfIcecream}</h2>
      <button
        onClick={() => {
          dispatch(orderIcecream());
        }}
      >
        Order cake
      </button>
      <button
        onClick={() => {
          dispatch(restockIcecream(10));
        }}
      >
        Restock cakes
      </button>
    </div>
  );
};

export default IcecreamView;
