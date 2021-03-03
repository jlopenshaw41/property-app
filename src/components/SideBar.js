import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link className="link" to={`/?query={"city": "Manchester"}`} />
      <Link className="link" to={`/?query={"city": "Leeds"}`} />
      <Link className="link" to={`/?query={"city": "Sheffield"}`} />
      <Link className="link" to={`/?query={"city": "Liverpool"}`} />
    </div>
  );
};

export default SideBar;
