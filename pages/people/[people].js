import React from "react";
import { useRouter } from "next/router";
import PeoplePage from "../../components/People/PeoplePage";
import { DataProvider } from "../../DataProvider";

const people = () => {
  const router = useRouter();
  const { people } = router.query;

  return (
    <>
      <DataProvider>
        <PeoplePage name={people} />
      </DataProvider>
    </>
  );
};

export default people;
