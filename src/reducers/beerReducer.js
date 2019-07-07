import { GET_BEERS } from "../types";

const initialState = {
  beers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload
      };
    default:
      return state;
  }
}
