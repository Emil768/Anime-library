export let setAnime = (items, type) => ({
  type: "SET_ANIME",
  payload: {
    items,
    type,
  },
});
