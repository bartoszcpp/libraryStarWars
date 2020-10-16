import React, { createContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons"
import { faJediOrder } from "@fortawesome/free-brands-svg-icons"
import { faGalacticRepublic } from "@fortawesome/free-brands-svg-icons"
import FrameRed from "./public/framered.svg"
import FrameBlue from "./public/frameblue.svg"
import gsap from "gsap"
import Link from 'next/link'

const AppContex = createContext();

const url = "https://swapi.dev/api/"
const basedUrl = "https://library-star-wars.vercel.app/"

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
  const [library, setLibrary] = useState([])

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
    }

    var object0 = [];
    var object1 = [];
    var object2 = [];
    var object3 = [];
    var object4 = [];
    var object5 = [];

    const localLibrary = localStorage.getItem("item")
    if (localLibrary != undefined) {
      setLibrary(JSON.parse(localLibrary))
    }

    function getDetail0(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail0(response.data);
      });
    }

    function showDetail0(data) {
      for (let i = 0; i < data.results.length; i++) {
        object0.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}planets/?page=${data.next.match(/\d+/)[0]}`
        getDetail0(link);
      }
    }

    function getDetail1(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail1(response.data);
      });
    }

    function showDetail1(data) {
      for (let i = 0; i < data.results.length; i++) {
        object1.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}people/?page=${data.next.match(/\d+/)[0]}`
        getDetail1(link);
      } else {
        setLoad(true)
      }
    }

    function getDetail2(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail2(response.data);
      });
    }

    function showDetail2(data) {
      for (let i = 0; i < data.results.length; i++) {
        object2.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}starships/?page=${data.next.match(/\d+/)[0]}`
        getDetail2(link);
      }
    }

    function getDetail3(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail3(response.data);
      });
    }

    function showDetail3(data) {
      for (let i = 0; i < data.results.length; i++) {
        object3.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}species/?page=${data.next.match(/\d+/)[0]}`
        getDetail3(link);
      }
    }

    function getDetail4(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail4(response.data);
      });
    }

    function showDetail4(data) {
      for (let i = 0; i < data.results.length; i++) {
        object4.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}vehicles/?page=${data.next.match(/\d+/)[0]}`
        getDetail4(link);
      }
    }

    function getDetail5(apiURL) {
      axios.get(apiURL).then(function (response) {
        showDetail5(response.data);
      });
    }

    function showDetail5(data) {
      for (let i = 0; i < data.results.length; i++) {
        object5.push(data.results[i])
      }
      if (data.next) {
        const link = `${url}films/?page=${data.next.match(/\d+/)[0]}`
        getDetail5(link);
      }
    }

    getDetail0(`${url}planets/`);
    getDetail1(`${url}people/`);
    getDetail2(`${url}starships/`);
    getDetail3(`${url}species/`);
    getDetail4(`${url}vehicles/`);
    getDetail5(`${url}films/`);

    setPlanets(object0)
    setPeople(object1)
    setStarships(object2)
    setSpecies(object3)
    setVehicles(object4)
    setFilms(object5)

    // axios.all([
    //   axios.get(`${url}planets/`),
    //   axios.get(`${url}people/`),
    //   axios.get(`${url}starships/`),
    //   axios.get(`${url}species/`),
    //   axios.get(`${url}vehicles/`),
    //   axios.get(`${url}films/`),
    // ])
    //   .then(responseArr => {
    //     setPlanets(responseArr[0].data)
    //     setPeople(responseArr[1].data)
    //     setStarships(responseArr[2].data)
    //     setSpecies(responseArr[3].data)
    //     setVehicles(responseArr[4].data)
    //     setFilms(responseArr[5].data)
    //     setLoad(true)
    //   });
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
      <AppContex.Provider value={{ basedUrl, planets, people, starships, species, vehicles, films, library }}>
        <div style={{ backgroundColor: `${color}` }} >
          <main className="main">
            <div className="navbar">
              <div className="logo">
                <a href={basedUrl}>
                  <img className="img-fluid" src="/logo.png"></img>
                </a>
              </div>
              <div className="changeSide" onClick={() => handleChangeColor()}>
                <p className="displayNone">Change your side</p>
                {/* <FontAwesomeIcon className="socialIcon bigArrow" icon={faShare} /> */}
                {/* <img className="img-fluid" src={`${side === "dark" ? "darkside.png" : "lightside.png"}`}></img> */}
                {side === "dark" ?
                  <>
                    <FontAwesomeIcon className="socialIcon sideIcon" icon={faGalacticRepublic} />
                    <div ref={wrapperRed} className="svg-fixed">
                      <FrameRed />
                    </div>
                  </> :
                  <>
                    <FontAwesomeIcon className="socialIcon sideIcon" icon={faJediOrder} />
                    <div ref={wrapperRed} className="svg-fixed">
                      <FrameBlue />
                    </div>
                  </>
                }

              </div>
            </div>

            <div className="container">
              <div className="yourLibrary">
                <Link href="/library">
                  <div>
                    <FontAwesomeIcon className="socialIcon" icon={faJournalWhills} />
                    <p>Your Library</p>
                  </div>
                </Link>
              </div>
            </div>
            {children}
          </main>
          <footer>
            Bartosz Ciąpała - 2020
            </footer>
        </div>
      </AppContex.Provider>
    );
  } else {
    return (
      <>
        <div style={{ backgroundColor: `${color}` }} >
          <section className="main">
            <div class="spinner">
              <div className="rect1"></div>
              <div className="rect2"></div>
              <div className="rect3"></div>
              <div className="rect4"></div>
              <div className="rect5"></div>
            </div>
            {side === "dark" ?
              <div ref={wrapperRed} className="svg-fixed">
                <FrameRed />
              </div> :
              <div ref={wrapperRed} className="svg-fixed">
                <FrameBlue />
              </div>

            }
          </section>
        </div>
      </>
    )
  }


}

export { DataProvider, AppContex };