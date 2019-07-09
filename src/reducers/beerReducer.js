import { GET_BEERS, ADD_FAVOURITES } from "../types";

const initialState = {
  beers: [],
  favourites: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    default:
      return state;
  }
}
