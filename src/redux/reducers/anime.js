let initialState = {
  isLoaded: false,
  items: [],
};

let anime = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME":
      return {
        ...state,
        items: action.payload,
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
