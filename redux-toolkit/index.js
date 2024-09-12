const store = require("./app/store");
const cakeAction = require("./features/cake/cakeSlice").cakeAction;
const icecreamAction =
  require("./features/icecream/icecreamSlice").icecreamAction;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

store.dispatch(fetchUsersUsers());

store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.ordered());
store.dispatch(cakeAction.restock(4));

store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.ordered());
store.dispatch(icecreamAction.restock(3));

unsubscribe();
