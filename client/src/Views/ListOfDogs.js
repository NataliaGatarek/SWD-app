import React, { useState, useEffect } from "react";
import CardToDisplayDogs from "../Components/CardToDisplayDog.js";
import Input from "../Components/Input.js";
import "./views.css";

function ListOfDogs() {
  const [dogs, setDogs] = useState([]);

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
        {dogs.map((dog) => {
          return <CardToDisplayDogs key={dog.id} dogs={dog} />;
        })}
      </div>
    </div>
  );
}
export default ListOfDogs;
