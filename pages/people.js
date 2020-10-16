import React from 'react';
import AllPeople from '../components/People/AllPeople';
import { DataProvider } from '../DataProvider';


const people = () => {

  return (
    <DataProvider>
      <div className="container">
        <h1>Explore all your favourite people...</h1>
        <AllPeople />
      </div>
    </DataProvider>
  );
};

export default people;