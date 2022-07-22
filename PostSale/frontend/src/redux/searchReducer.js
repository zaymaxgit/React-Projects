const searchState = {
  data: [],
};
console.log(searchState.data);
export const searchReducer = (state = searchState, action) => {
  switch (action.type) {
    case "SEACRHPOST":
      return {
        ...state,
        data: [action.data],
      };
    default:
      return state;
  }
};
