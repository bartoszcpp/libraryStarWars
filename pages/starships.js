import React from "react";
import AllStarships from "../components/Starships/AllStarships";
import { DataProvider } from "../DataProvider";

const starships = () => {
  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite starships...</h1>
        <AllStarships />
      </div>
    </DataProvider>
  );
};

export default starships;
