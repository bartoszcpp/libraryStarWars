import React from 'react';
import AllPeople from '../components/People/AllPeople';
import { DataProvider } from '../DataProvider';


const people = () => {

  return (
    <DataProvider>
      <AllPeople />
    </DataProvider>
  );
};

export default people;