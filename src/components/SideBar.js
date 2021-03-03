import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { search } = useLocation();
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };

  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  return (
    <div>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Manchester" })}
      >
        Manchester
      </Link>
      <Link className="link" to={buildQueryString("query", { city: "Leeds" })}>
        Leeds
      </Link>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Sheffield" })}
      >
        Sheffield
      </Link>
      <Link
        className="link"
        to={buildQueryString("query", { city: "Liverpool" })}
      >
        Liverpool
      </Link>
      <Link className="link" to={buildQueryString("sort", { price: -1 })}>
        Sort by price (lowest to highest)
      </Link>
      <Link className="link" to={buildQueryString("sort", { price: 1 })}>
        Sort by price (highest to lowest)
      </Link>
    </div>
  );
};

export default SideBar;
