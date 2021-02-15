let initialState = {
  isLoaded: false,
  items: [],
  type:""
};

let anime = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      return {
        ...state,
        items: action.payload.items,
        type:action.payload.type,
        isLoaded: true,
      };

      case "SET_MANGA":
      return {
        ...state,
        items: action.payload,
        type:action.type,
        isLoaded: true,
      };
    case "SET_LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default anime;
