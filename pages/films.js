import React from "react";
import AllFilms from "../components/Films/AllFilms";
import { DataProvider } from "../DataProvider";

const films = () => {
  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite films...</h1>
        <AllFilms />
      </div>
    </DataProvider>
  );
};

export default films;
