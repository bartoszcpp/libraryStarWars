import React from "react";
import { useRouter } from "next/router";
import StarshipsPage from "../../components/Starships/StarshipsPage";
import { DataProvider } from "../../DataProvider";

const starship = () => {
  const router = useRouter();
  const { starship } = router.query;

  return (
    <>
      <DataProvider>
        <StarshipsPage name={starship} />
      </DataProvider>
    </>
  );
};

export default starship;
