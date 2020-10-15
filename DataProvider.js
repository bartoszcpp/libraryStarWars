import React, { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { faJediOrder } from "@fortawesome/free-brands-svg-icons"
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons"
import FrameRed from "./public/framered.svg"
import FrameBlue from "./public/frameblue.svg"
import gsap from "gsap"


const PlanetContext = createContext();
const PeopleContext = createContext();
const StarshipsContext = createContext();
const SpeciesContext = createContext();
const VehiclesContext = createContext();
const FilmsContext = createContext();
const UrlContext = createContext();

const url = "https://swapi.dev/api/"
const basedUrl = "http://localhost:3000/"

function DataProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [people, setPeople] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [films, setFilms] = useState([]);
  const [color, setColor] = useState("#40363a");
  const [side, setSide] = useState("dark");
  const [load, setLoad] = useState(false);

  const wrapperRed = useRef(null)
  const wrapperBlue = useRef(null)

  useEffect(() => {

    const localColor = localStorage.getItem("color")
    if (localColor != undefined) {
      if (localColor === "#4c596f") {
        setColor("#4c596f")
        setSide("light")
      } else if (localColor === "#40363a") {
        setColor("#40363a")
        setSide("dark")
      }

      //   const [element1] = wrapperRed.current.children
      //   //const [element2] = wrapperBlue.current.children

      //   //const down1 = element1.getElementById("down")
      //   const up1 = element1.getElementById("up")

      //   //gsap.set([up1], { autoAlpha: 0 })

      //   const tl = gsap.timeline()

      //   tl.to(up1, { left: 100, opacity: 0.5 })

    }
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

  const handleChangeColor = () => {
    if (color === "#40363a") {
      setColor("#4c596f")
      setSide("light")
      localStorage.setItem("color", "#4c596f")
    } else {
      setColor("#40363a")
      setSide("dark")
      localStorage.setItem("color", "#40363a")
    }

  }

  if (load) {
    return (
      <UrlContext.Provider value={basedUrl} >
        <PlanetContext.Provider value={planets}>
          <PeopleContext.Provider value={people} >
            <StarshipsContext.Provider value={starships} >
              <SpeciesContext.Provider value={species} >
                <VehiclesContext.Provider value={vehicles} >
                  <FilmsContext.Provider value={films} >
                    {/* <UserDispatchContext.Provider value={setUserDetails}> */}
                    <div style={{ backgroundColor: `${color}` }} >
                      <section className="main">
                        <div className="changeSide" onClick={() => handleChangeColor()}>
                          <p>Change your side</p>
                          {/* <FontAwesomeIcon className="socialIcon bigArrow" icon={faShare} /> */}
                          <img className="img-fluid" src={`${side === "dark" ? "darkside.png" : "lightside.png"}`}></img>
                          {side === "dark" ?
                            <div ref={wrapperRed} className="svg-fixed">
                              <FrameRed />
                            </div> :
                            <div ref={wrapperRed} className="svg-fixed">
                              <FrameBlue />
                            </div>
                          }

                        </div>
                        {children}
                      </section>
                    </div>
                    {/* </UserDispatchContext.Provider> */}
                  </FilmsContext.Provider>
                </VehiclesContext.Provider>
              </SpeciesContext.Provider>
            </StarshipsContext.Provider>
          </PeopleContext.Provider>
        </PlanetContext.Provider>
      </UrlContext.Provider >
    );
  } else {
    return (
      <>
        <div>loading...</div>
        <div ref={wrapperRed} className="svg-fixed">
          <FrameRed />
        </div>
      </>
    )
  }


}

export { DataProvider, PlanetContext, PeopleContext, StarshipsContext, SpeciesContext, VehiclesContext, FilmsContext, UrlContext };