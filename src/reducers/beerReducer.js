import { GET_BEERS, MORE_INFORMATION } from "../types";

const initialState = {
  beers: [],
  moreDetails: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BEERS:
      return {
        ...state,
        beers: action.payload
      };
    case MORE_INFORMATION:
      return {
        ...state,
        moreDetails: action.payload
      };
    default:
      return state;
  }
}
