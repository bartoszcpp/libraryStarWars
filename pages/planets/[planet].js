import React from "react";
import { useRouter } from "next/router";
import PlanetPage from "../../components/Planets/PlanetPage";
import { DataProvider } from "../../DataProvider";

const planet = () => {
  const router = useRouter();
  const { planet } = router.query;

  return (
    <>
      <DataProvider>
        <PlanetPage name={planet} />
      </DataProvider>
    </>
  );
};

export default planet;
