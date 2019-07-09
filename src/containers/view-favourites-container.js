import React, { Component } from "react";
import { Beer } from "../components";

class ViewFavouritesContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { favouriteList } = this.props.location.state;

    const beerList = favouriteList.map(beer => (
      <Beer
        key={beer.id}
        beer={beer}
        addBeerToFavourite={this.addBeerToFavourite}
      />
    ));
    return (
      <div className="container">
        <h1>Favourites list</h1>
        {beerList}
      </div>
    );
  }
}

export default ViewFavouritesContainer;
