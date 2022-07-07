const initState = {
  comments: [],
};

export const commentReducer = (state = initState, action) => {
  console.log("commentReducer/action -> ", action);
  console.log("commentReducer/state -> ", state);
  switch (action.type) {
    case "TEXTCOMMENT":
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    default:
      return state;
  }
};
