let initialState = {
    state:false,
  };
  
  let modal = (state = initialState, action) => {
    switch (action.type) {
      case "SET_MODAL_ACTIVE":
        return {
          ...state,
          state:action.payload
        };
        case "SET_MODAL_CLOSE":
          return {
            ...state,
            state:action.payload
          };
      default:
        return state;
    }
  };
  
  export default modal;
  