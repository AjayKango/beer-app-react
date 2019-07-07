import { GET_BEERS } from "../types";

const getBeers = () => dispatch => {
  fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(beers =>
      dispatch({
        type: GET_BEERS,
        payload: beers
      })
    );
};

export { getBeers };
