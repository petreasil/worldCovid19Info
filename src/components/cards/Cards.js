import React, { Component } from "react";
import Card from "../card/Card";
import { AppContext } from "../../context";

class Cards extends Component {
  static contextType = AppContext;

  render() {
    let filterCountries = this.context.news.filter(item => {
      return item.country.toLowerCase().indexOf(this.context.filter) !== -1;
    });

    return filterCountries.map(item => (
      <div className="col col-lg-3 col-md-4 col-sm-1 mb-4">
        <Card
          country={item.country}
          key={item.country}
          cases={item.cases}
          todayCases={item.todayCases}
          deaths={item.deaths}
          todayDeaths={item.todayDeaths}
          recovered={item.recovered}
          active={item.active}
          critical={item.critical}
        />
      </div>
    ));
  }
}

export default Cards;
