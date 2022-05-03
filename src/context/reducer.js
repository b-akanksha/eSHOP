export const initialState = {
  basket: [],
  error: {
    open: false,
    message: "",
  },
  token: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET": {
      let tempArray = state.basket.filter(
        (i) => i.title !== action.payload.title
      );
      return { ...state, basket: [...tempArray] };
    }
    case "ERROR_OCCURED":
      return { ...state, error: { open: true, message: action.payload } };
    case "CLOSE_ERROR":
      return { ...state, error: { open: false, message: "" } };
    case 'ADD_TOKEN': return {...state, token: action.payload};
    default:
      return { ...state };
  }
};
