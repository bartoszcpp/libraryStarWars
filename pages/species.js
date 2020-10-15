import React from 'react';
import AllSpecies from "../components/Species/AllSpecies"
import { DataProvider } from '../DataProvider';


const species = () => {

  return (
    <DataProvider>
      <AllSpecies />
    </DataProvider>
  );
};

export default species;