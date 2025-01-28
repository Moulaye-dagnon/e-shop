export const SET_CURRENT_USER = "SET_CURRENT_USER";

const initialState = { currentUser: null };
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
