import React from "react";
import { MoreInformation } from "../components";

export default function MoreInfoContainer(props) {
  const { beer } = props.location.state;
  return (
    <div className="container">
      <MoreInformation beerInfo={beer} />
    </div>
  );
}
