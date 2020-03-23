import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      country,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      active,
      critical
    } = this.props;
    return (
      <div className="card border-info">
        <div className="card-header bg-info text-center text-white font-weight-bold">
          {country}
        </div>
        <div className="card-body">
          <p className="card-text text-center">
            <span className="badge badge-pill badge-info">Cases: {cases}</span>
          </p>
          <p className="card-text text-center">
            <span className="badge badge-pill badge-info">
              Today Cases: {todayCases}
            </span>
          </p>
          <p className="card-text text-center">
            <span className="badge badge-pill badge-danger">
              Deaths: {deaths}
            </span>
          </p>
          <p className="card-text text-center">
            <span className="badge badge-pill badge-info">
              Today Deaths: {todayDeaths}
            </span>
          </p>

          <div className="alert alert-success" role="alert">
            Recovered: {recovered}
          </div>
          <div className="alert alert-success" role="alert">
            Active: {active}
          </div>
          <div className="alert alert-danger" role="alert">
            Critical: {critical}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
