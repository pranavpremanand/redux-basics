const redux = require("redux");
const createStore = redux.createStore;

// Action type
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

// Action creator
function buyIceCream(){
    return{
        type:BUY_ICECREAM
    }
}

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
// Action
// {
//   type: BUY_CAKE,
//   info: "First redux action",
//  }

// Initial state
const initialState = {
  noOfCakes: 10,
  noOfIceCreams:20
};

// (prevState,action) => newState

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
      case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};

// Storing the application state inside redux store
const store = createStore(reducer);

// Get current state of the application
console.log("Initial state", store.getState());

// Listener to the store - So any time the state update, the console.log will work
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
