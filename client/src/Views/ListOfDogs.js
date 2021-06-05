import React from "react";
import CardToDisplayDogs from "../Components/CardToDisplayDog.js";

function ListOfDogs() {
  return (
    <div>
      <div className="flex-cards">
        <CardToDisplayDogs />
      </div>
    </div>
  );
}
export default ListOfDogs;
