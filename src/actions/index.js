import { GET_BEERS, MORE_INFORMATION } from "../types";

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

const moreDetailsForBeer = beer => dispatch => {
  dispatch({
    type: MORE_INFORMATION,
    payload: beer
  });
};

export { getBeers, moreDetailsForBeer };
