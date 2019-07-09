import React, { Component } from "react";
import { MoreInformation } from "../components";

class MoreInfoContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //const beer = this.props.location.state.beer.beer.name;
    const { beer } = this.props.location.state;
    return (
      <div className="container">
        <MoreInformation beerInfo={beer} />
      </div>
    );
  }
}

export default MoreInfoContainer;
