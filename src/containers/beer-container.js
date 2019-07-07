import React, { Component } from "react";
import { Beer } from "../components";
import { connect } from "react-redux";
import { getBeers } from "../actions";

class BeerContainer extends Component {
  componentWillMount() {
    this.props.getBeers();
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

    const beerList = beerData.map(beer => <Beer key={beer.id} beer={beer} />);
    return (
      <div className="container" style={background}>
        <h3 className="display-3 centre">Top 25 Beers</h3>
        {beerList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers
});

export default connect(
  mapStateToProps,
  { getBeers }
)(BeerContainer);
