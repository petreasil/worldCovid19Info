import React, { Component } from "react";
import { AppContext } from "./context";
import { fetchItems } from "./api/itemsAPI";

class AppStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      filter: []
    };
  }
  componentDidMount() {
    console.log(this.context);
    fetchItems().then(data => this.setState({ news: data }));
  }

  handleChange = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({
      filter: value
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          filterCountry: this.filterCountry
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppStore;
