const statePosts = {
  data: [],
};

export const searchReducer = (state = statePosts, action) => {
  switch (action.type) {
    case "SEARCHPOST":
      return {
        ...state,
        data: [action.data],
      };
    default:
      return state;
  }
};
