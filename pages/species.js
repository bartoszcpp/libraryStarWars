import React from "react";
import AllSpecies from "../components/Species/AllSpecies";
import { DataProvider } from "../DataProvider";

const species = () => {
  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite species...</h1>
        <AllSpecies />
      </div>
    </DataProvider>
  );
};

export default species;
