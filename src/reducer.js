export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDbiUm1ARBvLwgeDck8Gt80O4k9OjbQFGkT3a98SKDsPnezXcZM94hnYnWftkClAp3VsQdIlHvG-fTlDiLjmI1aTu-WVTRA50ws0QSNRC_K5oNxO_CrK7rI-UOLTBL2HVQSrzkUmfYsmH0Peth-YRIlcEo3f1N82DCXllVxthJ69ABT",
};

export const reducer = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
