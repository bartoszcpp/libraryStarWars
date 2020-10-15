import React from 'react';
import AllVehicles from "../components/Vehicles/AllVehicles"
import { DataProvider } from '../DataProvider';


const vehicles = () => {

  return (
    <DataProvider>
      <AllVehicles />
    </DataProvider>
  );
};

export default vehicles;