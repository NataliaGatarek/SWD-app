import React, { useState, useEffect, useContext } from "react";
import CardToDisplayDog from "../Components/CardToDisplayDog.js";
import Input from "../Components/Input.js";
import { DogContext } from "../Context/DogContext.js";
import "./views.css";

function ListOfDogs() {
  const [dogs, setDogs] = useState([]);
  const { searchBaner, setSearchBaner } = useContext(DogContext);

  const fetchApi = () => {
    fetch("http://localhost:5000/dogs/all")
      .then((response) => response.json())
      .then((data) => {
        setDogs(data);
      });
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <div className="flex-cards">
        <Input />
        {dogs
          .filter(
            (dog) =>
              dog.kennel.toLowerCase().includes(searchBaner.toLowerCase()) |
              dog.name.toLowerCase().includes(searchBaner.toLowerCase())
          )
          .map((dog) => {
            return <CardToDisplayDog key={dog.id} dogs={dog} />;
          })}
      </div>
    </div>
  );
}
export default ListOfDogs;
