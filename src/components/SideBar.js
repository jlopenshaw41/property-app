import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj, search) => {
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, {
    addQueryPrefix: true,
    encode: false,
  });
};

const SideBar = () => {
  const { search } = useLocation();
  return (
    <div>
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
