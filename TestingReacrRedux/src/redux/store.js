/**
 * 
 * import { createStore } from "redux";

const initState = {
  likes: 0,
};

const reducer = (state = initState, action) => {
  console.log("action > ", action);
  console.log("state > ", state);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        likes: state.likes + 1,
      };
    case "DECINCREMENT":
      return {
        ...state,
        likes: state.likes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

 */
