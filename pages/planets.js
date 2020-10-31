import React from "react";
import AllPlanets from "../components/Planets/AllPlanets";
import { DataProvider } from "../DataProvider";

const planet = () => {
  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite planet...</h1>
        <AllPlanets />
      </div>
    </DataProvider>
  );
};

export default planet;
