import React from 'react';
import AllVehicles from "../components/Vehicles/AllVehicles"
import { DataProvider } from '../DataProvider';


const vehicles = () => {

  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite vehicles...</h1>
        <AllVehicles />
      </div>
    </DataProvider>
  );
};

export default vehicles;