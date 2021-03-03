import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <Link className="link" to={`/?query={"city":"Manchester"}`}>
        Manchester
      </Link>
      <Link className="link" to={`/?query={"city":"Leeds"}`}>
        Leeds
      </Link>
      <Link className="link" to={`/?query={"city":"Sheffield"}`}>
        Sheffield
      </Link>
      <Link className="link" to={`/?query={"city":"Liverpool"}`}>
        Liverpool
      </Link>
    </div>
  );
};

export default SideBar;
