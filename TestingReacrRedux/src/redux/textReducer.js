const initState = {
  text: "",
};

export const textReducer = (state = initState, action) => {
  console.log("textReducer/action -> ", action);
  console.log("textReducer/state -> ", state);
  switch (action.type) {
    case "INPUTTEXT":
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};
