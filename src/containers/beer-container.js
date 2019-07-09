import React, { Component } from "react";
import { Beer } from "../components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBeers, addToFavourites } from "../actions";

class BeerContainer extends Component {
  componentWillMount() {
    this.props.getBeers();
    this.addBeerToFavourite = this.addBeerToFavourite.bind(this);
  }

  addBeerToFavourite(favBeer) {
    if (!this.props.favourites.favourites.includes(favBeer)) {
      this.props.addToFavourites(favBeer);
    } else {
      alert("Beer already added as favourite");
    }
  }

  render() {
    const background = {
      background: "whitesmoke"
    };
    let beerData = [];
    if (this.props.beers.beers.length > 0) {
      console.log(this.props.beers.beers);
      beerData = this.props.beers.beers;
    }

    const beerList = beerData.map(beer => (
      <Beer
        key={beer.id}
        beer={beer}
        addBeerToFavourite={this.addBeerToFavourite}
      />
    ));
    return (
      <div className="container" style={background}>
        <div className="display-3 centre">
          <span style={{ fontSize: 35, fontWeight: "bolder" }}>
            Top 25 Beers
          </span>
          <span style={{ float: "right", fontSize: 20 }}>
            <Link
              to={{
                pathname: "/viewFavourites",
                state: { favouriteList: this.props.favourites.favourites }
              }}
            >
              View Favourites (
              {this.props.favourites.favourites.length > 0
                ? this.props.favourites.favourites.length
                : 0}
              )
            </Link>
          </span>
        </div>
        {beerList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers,
  favourites: state.favourites
});

export default connect(
  mapStateToProps,
  { getBeers, addToFavourites }
)(BeerContainer);
