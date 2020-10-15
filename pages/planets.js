import React from 'react';
import AllPlanets from "../components/Planets/AllPlanets"
import { DataProvider } from '../DataProvider';


const planet = () => {

  return (
    <DataProvider>
      <AllPlanets />
    </DataProvider>
  );
};

export default planet;