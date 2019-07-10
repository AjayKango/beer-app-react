import { GET_BEERS, ADD_FAVOURITES, REMOVE_FAVOURITES } from "../types";

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

const addToFavourites = beer => dispatch => {
  dispatch({
    type: ADD_FAVOURITES,
    payload: beer
  });
};

const removeFromFavourites = beer => dispatch => {
  dispatch({
    type: REMOVE_FAVOURITES,
    payload: beer
  });
};

export { getBeers, addToFavourites, removeFromFavourites };
