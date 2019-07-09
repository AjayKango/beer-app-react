import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  BeerContainer,
  MoreInfoContainer,
  ViewFavouritesContainer
} from "../containers";

const Router = () => (
  <Switch>
    <Route exact path="/" component={BeerContainer} />
    <Route exact path="/moreInfo" component={MoreInfoContainer} />
    <Route exact path="/viewFavourites" component={ViewFavouritesContainer} />
  </Switch>
);

export default Router;
