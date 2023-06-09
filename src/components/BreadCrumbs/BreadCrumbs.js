import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();
  const currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="BreadCrumbs">{crumbs}</div>;
}

export default BreadCrumbs;
