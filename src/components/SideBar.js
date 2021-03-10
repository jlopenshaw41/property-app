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
  color: #404040;
  font-weight: 350;
  letter-spacing: 0.05em;
  text-decoration: none;
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
      <SideBarHeading>Filter by region:</SideBarHeading>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "North West" }, search)}
      >
        North West
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "North East" }, search)}
      >
        North East
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "Midlands" }, search)}
      >
        Midlands
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "East" }, search)}
      >
        East
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "South East" }, search)}
      >
        South East
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("query", { region: "South West" }, search)}
      >
        South West
      </SideBarLink>
      <SideBarLink className="link" to="/">
        All regions
      </SideBarLink>
      <SideBarHeading>Sort by:</SideBarHeading>
      <SideBarLink
        className="link"
        to={buildQueryString("sort", { price: 1 }, search)}
      >
        Price (ascending)
      </SideBarLink>
      <SideBarLink
        className="link"
        to={buildQueryString("sort", { price: -1 }, search)}
      >
        Price (descending)
      </SideBarLink>
    </StyledSideBar>
  );
};

export default SideBar;
