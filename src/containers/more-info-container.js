import React from "react";
import { MoreInformation } from "../components";

export default function MoreInfoContainer() {
  const { beer } = this.props.location.state;
  return (
    <div className="container">
      <MoreInformation beerInfo={beer} />
    </div>
  );
}
