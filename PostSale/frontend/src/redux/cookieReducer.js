const cookieState = {
  name: "",
};

export const cookieReducer = (state = cookieState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "USERCOOKIE":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};
