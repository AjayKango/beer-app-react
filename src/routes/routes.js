import React from "react";
import { Switch, Route } from "react-router-dom";
import { BeerContainer, MoreInfoContainer } from "../containers";

const Router = () => (
  <Switch>
    <Route exact path="/" component={BeerContainer} />
    <Route exact path="/moreInfo" component={MoreInfoContainer} />
  </Switch>
);

export default Router;
