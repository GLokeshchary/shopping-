import React, { useEffect, useState } from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import DropDownList from "../Select/DropDownList";
import axios from "axios";
function ProductPageDisplay() {
    const [categoryList, setcategoryList] = useState([" "]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/products/filter/categoryNames")
      .then(response => setcategoryList(response.data))
      .catch(error=>console.log(error))
  }, []);
 
  
  return (
    <>
      <div className="prouctPageDisplay">
        <div className="bread">
          <BreadCrumbs />
        </div>
      </div>
      <div className="ProductHeading">
        <h1>Men Clothing(6058)</h1>
      </div>
      <div className="displayWrapper">
        <div className="fliters">
          <DropDownList List={categoryList} filterName="Category" />
          <DropDownList filterName="Brand" />
          <DropDownList filterName="" />
        </div>
        <div className="productList"></div>
      </div>
    </>
  );
}

export default ProductPageDisplay;
