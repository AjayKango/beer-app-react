import { GET_BEERS, ADD_FAVOURITES, REMOVE_FAVOURITES } from "../types";

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
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
}
