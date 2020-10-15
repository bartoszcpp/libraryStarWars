import React from 'react';
import AllFilms from "../components/Films/AllFilms"
import { DataProvider } from '../DataProvider';


const films = () => {

  return (
    <DataProvider>
      <AllFilms />
    </DataProvider>
  );
};

export default films;