import React from "react";
import CardToDisplayDogs from "../Components/CardToDisplayDog.js";
import Input from "../Components/Input.js";

function ListOfDogs() {
  return (
    <div>
      <div className="flex-cards">
        <Input />
        <CardToDisplayDogs />
        <CardToDisplayDogs />
      </div>
    </div>
  );
}
export default ListOfDogs;
