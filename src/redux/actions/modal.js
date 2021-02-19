export let setModalActive = (state, type) => ({
  type: "SET_MODAL_ACTIVE",
  payload: {
    state,
    type,
  },
});

export let setModalClose = (state, type) => ({
  type: "SET_MODAL_CLOSE",
  payload: {
    state,
    type,
  },
});

export let setModalFilterActive = (state, type) => ({
  type: "SET_MODAL_FILTER_ACTIVE",
  payload: {
    state,
    type,
  },
});

export let setModalFilterClose = (state, type) => ({
  type: "SET_MODAL_FILTER_CLOSE",
  payload: {
    state,
    type,
  },
});
