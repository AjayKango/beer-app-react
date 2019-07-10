import React, { Component } from "react";
import { Beer } from "../components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBeers, addToFavourites } from "../actions";

class BeerContainer extends Component {
  constructor(props) {
    super(props);
    this.addBeerToFavourite = this.addBeerToFavourite.bind(this);
  }

  componentWillMount() {
    this.props.getBeers();
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
    const { beers } = this.props.beers;

    const beerList = beers.map(beer => (
      <Beer
        key={beer.id}
        beer={beer}
        isFavourites={false}
        addBeerToFavourite={this.addBeerToFavourite}
      />
    ));
    return (
      <div className="container" style={background}>
        <div className="display-3 centre">
          <span style={{ fontSize: 35, fontWeight: "bolder" }}>
            Top 25 Beers
          </span>
          <span style={{ float: "right", fontSize: 20, marginTop: 55 }}>
            <Link
              aria-label="View favourites"
              to={{
                pathname: "/viewFavourites"
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
