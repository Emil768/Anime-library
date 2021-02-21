export let setAnime = (items, type) => ({
  type: "SET_ANIME",
  payload: {
    items,
    type,
  },
});

export let setLoaded = payload => ({
  type: "SET_LOADED",
  payload,
});
