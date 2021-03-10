import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";

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

const StyledSideBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid gray;
  width: 20%;
`;

const StyledSearchForm = styled.form`
  padding: 5px;
`;

const SideBarLink = styled(Link)`
  padding: 5px;
`;

const SideBarHeading = styled.h2`
  padding: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

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
    <StyledSideBar className="sidebar">
      <StyledSearchForm className="search-form" onSubmit={handleSearch}>
        <label htmlFor="search-input">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </StyledSearchForm>
      <SideBarHeading>Filter by:</SideBarHeading>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { city: "Manchester" }, search)}
      >
        Manchester
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { city: "Leeds" }, search)}
      >
        Leeds
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { city: "Sheffield" }, search)}
      >
        Sheffield
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { city: "Liverpool" }, search)}
      >
        Liverpool
      </SideBarLink>
      <SideBarHeading>Sort by:</SideBarHeading>
      <SideBarLink
        className="link"
        to={buildQueryString("sort", { price: 1 }, search)}
      >
        Sort by price (lowest to highest)
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("sort", { price: -1 }, search)}
      >
        Sort by price (highest to lowest)
      </SideBarLink>
    </StyledSideBar>
  );
};

export default SideBar;
