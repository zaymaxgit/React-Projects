const initState = {
  likes: 0,
};

export const likeReducer = (state = initState, action) => {
  console.log("likeReducer/action -> ", action);
  console.log("likeReducer/state -> ", state);
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
