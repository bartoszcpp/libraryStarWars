import React from "react";
import { useRouter } from "next/router";
import FilmsPage from "../../components/Films/FilmsPage";
import { DataProvider } from "../../DataProvider";

const films = () => {
  const router = useRouter();
  const { films } = router.query;

  return (
    <>
      <DataProvider>
        <FilmsPage title={films} />
      </DataProvider>
    </>
  );
};

export default films;
