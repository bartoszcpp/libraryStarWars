import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';


const PlanetContext = createContext();
const PeopleContext = createContext();
const StarshipsContext = createContext();
const SpeciesContext = createContext();
const VehiclesContext = createContext();
const FilmsContext = createContext();

const url = "https://swapi.dev/api/"

function DataProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    // axios.get(`${url}planets/`)
    //   .then(res => {
    //     console.log(res.data.results)
    //     setPlanets(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err.message)

    //   })
    //   axios.get(`${url}people/`)
    //   .then(res => {
    //     console.log(res.data.results)
    //     setPeople(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err.message)

    //   })
    //   axios.get(`${url}starships/`)
    //   .then(res => {
    //     console.log(res.data.results)
    //     setStarships(res.data)
    //     setLoad(true)
    //   })
    //   .catch(err => {
    //     console.log(err.message)

    //   })

      axios.all([
        axios.get(`${url}planets/`),
        axios.get(`${url}people/`),
        axios.get(`${url}starships/`),
        axios.get(`${url}species/`),
        axios.get(`${url}vehicles/`),
        axios.get(`${url}films/`),
      ])
      .then(responseArr => {
        //this will be executed only when all requests are complete
        setPlanets(responseArr[0].data)
        setPeople(responseArr[1].data)
        setStarships(responseArr[2].data)
        setSpecies(responseArr[3].data)
        setVehicles(responseArr[4].data)
        setFilms(responseArr[5].data)
        setLoad(true)
      });

  }, []);

  if (load) {
    return (
      <PlanetContext.Provider value={planets}>
        <PeopleContext.Provider value={people} >
        <StarshipsContext.Provider value={starships} >
        <SpeciesContext.Provider value={species} >
        <VehiclesContext.Provider value={vehicles} >
        <FilmsContext.Provider value={films} >
        {/* <UserDispatchContext.Provider value={setUserDetails}> */}
          {children}
        {/* </UserDispatchContext.Provider> */}
        </FilmsContext.Provider>
        </VehiclesContext.Provider>
        </SpeciesContext.Provider>
        </StarshipsContext.Provider>
        </PeopleContext.Provider>
      </PlanetContext.Provider>
    );
  } else {
    return (
      <div>loading...</div>
    )
  }


}

export { DataProvider, PlanetContext, PeopleContext,  StarshipsContext, SpeciesContext, VehiclesContext, FilmsContext};