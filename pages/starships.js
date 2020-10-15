import React from 'react';
import AllStarships from "../components/Starships/AllStarships"
import { DataProvider } from '../DataProvider';


const starships = () => {

  return (
    <DataProvider>
      <AllStarships />
    </DataProvider>
  );
};

export default starships;