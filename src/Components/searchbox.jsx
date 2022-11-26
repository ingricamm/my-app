import React from "react";
import "./style/searchbox.css"

function Searchbox() {
  return (
    <>
      <div className="search">
        <form className="search-form">
          <input type="text" placeholder="Search " />
          <button className="search-Btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
    </>
  );
}
export default Searchbox;
