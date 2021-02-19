let initialState = {
  state: false,
  type: "",
};

let modal = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODAL_ACTIVE":
      return {
        ...state,
        state: action.payload.state,
        type: action.payload.type,
      };
    case "SET_MODAL_CLOSE":
      return {
        ...state,
        state: action.payload.state,
        type: action.payload.type,
      };

    case "SET_MODAL_FILTER_ACTIVE":
      return {
        ...state,
        state: action.payload.state,
        type: action.payload.type,
      };

    case "SET_MODAL_FILTER_CLOSE":
      return {
        ...state,
        state: action.payload.state,
        type: action.payload.type,
      };
    default:
      return state;
  }
};

export default modal;
