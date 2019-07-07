import React, { Component } from "react";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const imageSize = {
      height: 200,
      width: 100
    };

    return (
      <React.Fragment>
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: 150, height: 240 }}>
                <img
                  src={this.props.beer.image_url}
                  className="img-thubnail"
                  style={imageSize}
                  alt={this.props.beer.name}
                />
              </td>
              <td style={{ textAlign: "left" }}>
                <div>
                  <span style={{ fontSize: 24, fontWeight: "bold" }}>
                    {this.props.beer.name}
                  </span>
                  <span style={{ float: "right" }}>
                    <button type="button" class="btn btn-outline-primary">
                      Add to Favourites
                    </button>
                  </span>
                </div>
                <div
                  style={{
                    fontWeight: 500,
                    paddingBottom: 10
                  }}
                >
                  <i>{this.props.beer.tagline}</i>
                </div>
                <div>{this.props.beer.description}</div>
                <div
                  style={{ fontWeight: "bolder", marginTop: 20, fontSize: 10 }}
                >
                  Alcohol by Volume: {this.props.beer.abv} %
                </div>
                <div style={{ marginTop: 10 }}>
                  <button type="button" class="btn btn-outline-info">
                    More Information
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Beer;
