import React from "react";
import { useRouter } from "next/router";
import VehiclesPage from "../../components/Vehicles/VehiclesPage";
import { DataProvider } from "../../DataProvider";

const vehicles = () => {
  const router = useRouter();
  const { vehicles } = router.query;

  return (
    <>
      <DataProvider>
        <VehiclesPage name={vehicles} />
      </DataProvider>
    </>
  );
};

export default vehicles;
