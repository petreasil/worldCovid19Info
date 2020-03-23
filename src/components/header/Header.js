import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";

function Header(props) {
  const context = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(response => response.json())
      .then(data => setData(data));
  }, [data]);

  function startTime() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    return `${day}/${month}/${year}`;
  }

  return (
    <nav className="navbar navbar-light bg-info">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Country Search"
          aria-label="Search"
          onChange={context.handleChange}
        />
      </form>

      <div className="my-2">
        <h6 className="text-center text-white">Global Cases: {startTime()}</h6>
        <span className="badge badge-pill badge-primary">
          Cases: {data.cases}
        </span>
        <span className="badge badge-pill badge-danger ml-2">
          Deaths: {data.deaths}
        </span>
        <span className="badge badge-pill badge-primary ml-2">
          Recovered: {data.recovered}
        </span>
      </div>

      <h4 className="text-white">Live information about COVID-19</h4>
    </nav>
  );
}

export default Header;
