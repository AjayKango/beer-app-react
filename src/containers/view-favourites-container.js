import React, { Component } from "react";
import { Beer, BackToHome } from "../components";
import { removeFromFavourites } from "../actions";
import { connect } from "react-redux";

class ViewFavouritesContainer extends Component {
  constructor(props) {
    super(props);
    this.removeBeerFromFavourite = this.removeBeerFromFavourite.bind(this);
  }
  removeBeerFromFavourite(favBeer) {
    if (this.props.favourites.favourites.includes(favBeer)) {
      this.props.removeFromFavourites(favBeer);
    } else {
      alert("Beer not found");
    }
  }

  render() {
    const { favourites } = this.props.favourites;

    const beerList = favourites.map(beer => (
      <Beer
        key={beer.id}
        beer={beer}
        isFavourites={true}
        removeBeerFromFavourite={this.removeBeerFromFavourite}
      />
    ));
    return (
      <div className="container">
        <h1>Favourites list</h1>
        {beerList}
        <BackToHome />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.favourites
});

export default connect(
  mapStateToProps,
  { removeFromFavourites }
)(ViewFavouritesContainer);
