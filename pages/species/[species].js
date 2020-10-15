import React, { useState } from 'react';
import { useRouter } from "next/router";
import SpeciesPage from '../../components/Species/SpeciesPage';
import { DataProvider } from '../../DataProvider';


const species = () => {
  const router = useRouter();
  const { species } = router.query;

  return (
    <>
      <DataProvider>
        <SpeciesPage name={species} />
      </DataProvider>
    </>
  );
};

export default species;