let initialState = {
  id: null,
};

let anime = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIME_INFO":
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default anime;
