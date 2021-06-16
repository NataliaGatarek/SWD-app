import React, { useState, useEffect, useContext } from "react";
import { DogContext } from "../Context/DogContext.js";

function Input(props) {
  const { searchBaner, setSearchBaner } = useContext(DogContext);
  return (
    <div>
      <input
        type="text"
        placeholder="search dogs"
        className="header-cont"
        onChange={(event) => {
          setSearchBaner(event.target.value);
        }}
      />
    </div>
  );
}
export default Input;
