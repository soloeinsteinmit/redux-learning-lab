const redux = require("redux");
const produce = require("immer").produce;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCK = "CAKE_RESTOCK";

const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCK = "ICECREAM_RESTOCK";

// Acion CREATOR
function orderCake() {
  return { type: CAKE_ORDERED, payload: 1 };
}

function restockCake(qty = 1) {
  return { type: CAKE_RESTOCK, payload: qty };
}

function orderIcecream() {
  return { type: ICECREAM_ORDERED, payload: 1 };
}

function restockIcecream(qty = 1) {
  return { type: ICECREAM_RESTOCK, payload: qty };
}
const initialState = {
  numOfCake: 10,
  numOfIcecream: 20,
};

const initialCakeState = {
  numOfCake: 10,
};
const initialIcecreamState = {
  numOfIcecream: 20,
};
// a reducer is a fucntion that takes the previous state and acion and returns the next state
// (previousState, acton ) => newState

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      //   return {
      //     ...state,
      //     numOfCake: state.numOfCake - 1,
      //   };
      return produce(state, (draft) => {
        draft.numOfCake = state.numOfCake - 1;
      });
    case CAKE_RESTOCK:
      //   return {
      //     ...state,
      //     numOfCake: state.numOfCake + action.payload,
      //   };
      return produce(state, (draft) => {
        draft.numOfCake = state.numOfCake + action.payload;
      });
    default:
      return state;
  }
};
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCK:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
const store = redux.createStore(rootReducer, applyMiddleware(logger));
console.log("initial store ", store.getState());

const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream },
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(5);
actions.orderIcecream();
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(7);

unsubscribe();
