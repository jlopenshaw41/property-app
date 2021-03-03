import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import "../styles/SideBar.css";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify({
      ...JSON.parse(currentQueryParams[operation] || "{}"),
      ...valueObj,
    }),
  };

  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: false,
  });
};

const SideBar = () => {
  const [searchText, setSearchText] = useState("");
  const { search } = useLocation();

  const history = useHistory();

  const handleSearch = (event) => {
    event.preventDefault();

    const newQueryString = buildQueryString("query", {
      title: { $regex: searchText },
    });

    history.push(newQueryString);
  };

  return (
    <div className="sidebar">
      <form className="search-form" onSubmit={handleSearch}>
        <label htmlFor="search-input">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <p>Filter by:</p>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Manchester" }, search)}
      >
        Manchester
      </Link>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Leeds" }, search)}
      >
        Leeds
      </Link>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Sheffield" }, search)}
      >
        Sheffield
      </Link>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Liverpool" }, search)}
      >
        Liverpool
      </Link>
      <p>Sort by:</p>
      <Link
        className="link"
        to={buildQueryString("sort", { price: 1 }, search)}
      >
        Sort by price (lowest to highest)
      </Link>
      <Link
        className="link"
        to={buildQueryString("sort", { price: -1 }, search)}
      >
        Sort by price (highest to lowest)
      </Link>
    </div>
  );
};

export default SideBar;
