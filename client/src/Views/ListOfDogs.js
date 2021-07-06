import React, { useEffect, useContext } from "react";
import CardToDisplayDog from "../Components/CardToDisplayDog.js";
import Input from "../Components/Input.js";
import { DogContext } from "../Context/DogContext.js";
import "./views.css";

function ListOfDogs() {
  const {
    searchBaner,
    setSearchBaner,
    dogs,
    setDogs,
    loadingPage,
    setLoadingPage,
  } = useContext(DogContext);

  useEffect(() => {
    const fetchApi = () => {
      fetch("http://localhost:5000/dogs/all")
        .then((response) => response.json())
        .then((data) => {
          setDogs(data);
          setLoadingPage(false);
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    };
    fetchApi();
  }, [setDogs, setLoadingPage]);

  return (
    <div>
      <div className="flex-cards">
        <Input />
        {!loadingPage ? (
          dogs
            .filter(
              (dog) =>
                dog.kennel.toLowerCase().includes(searchBaner.toLowerCase()) ||
                dog.name.toLowerCase().includes(searchBaner.toLowerCase())
            )
            .map((dog) => {
              return <CardToDisplayDog key={dog.id} dogs={dog} />;
            })
        ) : (
          <p>loading..</p>
        )}
      </div>
    </div>
  );
}
export default ListOfDogs;
