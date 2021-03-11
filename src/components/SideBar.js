import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import qs from "qs";
import styled from "styled-components";
import { Search } from "@styled-icons/material";

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
  align-items: flex-start;
  padding: 10px;
  width: 20%;
  min-width: 200px;
`;

const SearchInput = styled.input`
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #a9a9a9;
  border-right: none;
  border-radius: 25px 0px 0px 25px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  padding: 5px 5px 5px 10px;
  outline: none;
  width: 80%;
`;

const SearchButton = styled.button`
  background-color: rgba(255, 255, 255, 0.9);
  border: 1px solid #a9a9a9;
  border-left: none;
  border-radius: 0px 25px 25px 0px;
  color: #606060;
  height: 30px;
  padding-left: 0px;
  padding-right: 0px;
  position: relative;
  width: 20%;
`;

const SearchIcon = styled(Search)`
  color: #606060;
  height: 20px;
  padding-left: 5px;
  padding-right: 5px;
`;

const StyledSearchForm = styled.form`
  padding: 5px;
  display: flex;
  justify-content: center;
  width: 75%;
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
        <SearchInput
          id="search-input"
          type="text"
          value={searchText}
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <SearchButton type="submit">
          <SearchIcon />
        </SearchButton>
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
