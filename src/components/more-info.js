import React from "react";
import { Link } from "react-router-dom";

export default function MoreInformation(props) {
  const imageSize = {
    height: 200,
    width: 100
  };

  const attributeRow = {
    width: "auto",
    height: "auto",
    fontSize: 20,
    fontWeight: "bold"
  };

  const contentRow = {
    textAlign: "left",
    fontSize: 20
  };

  console.log(props.beerInfo);

  return (
    <React.Fragment>
      <table className="table">
        <tbody>
          <tr>
            <td style={attributeRow}>Bottle Design</td>
            <td style={contentRow}>
              <img
                src={props.beerInfo.image_url}
                className="img-thubnail"
                style={imageSize}
                alt={props.beerInfo.name}
              />
            </td>
          </tr>
          <tr>
            <td style={attributeRow}>Name</td>
            <td style={contentRow}>{props.beerInfo.name}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Tagline</td>
            <td style={contentRow}>{props.beerInfo.tagline}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Description</td>
            <td style={contentRow}>{props.beerInfo.description}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Contributor</td>
            <td style={contentRow}>{props.beerInfo.contributed_by}</td>
          </tr>
          <tr>
            <td style={attributeRow}>Food Pairing</td>
            <td style={contentRow}>
              <ul>
                {props.beerInfo.food_pairing.map(foodItem => (
                  <li>{foodItem}</li>
                ))}
              </ul>
            </td>
          </tr>
          <tr>
            <td style={attributeRow}>Brewers Tip</td>
            <td style={contentRow}>{props.beerInfo.brewers_tips}</td>
          </tr>
        </tbody>
      </table>
      <Link
        type="button"
        className="btn btn-outline-primary"
        to={{
          pathname: "/"
        }}
      >
        Back to Beer List
      </Link>
    </React.Fragment>
  );
}
