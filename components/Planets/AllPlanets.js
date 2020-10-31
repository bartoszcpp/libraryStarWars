import React, { useState, useEffect } from "react";
import { AppContex } from "../../DataProvider";
import PlanetWidget from "./PlanetWidget";

const AllPlanets = () => {
  const { planets, library } = React.useContext(AppContex);
  const data = planets;
  const [word, setWord] = useState("");
  const [listOfPlanets, setListOfPlanets] = useState([]);

  function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to = "aaaaeeeeiiiioooouuuunc------";
    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
      .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
      .replace(/\s+/g, "-") // collapse whitespace and replace by -
      .replace(/-+/g, "-"); // collapse dashes

    return str;
  }

  useEffect(() => {
    if (data != undefined && library != undefined) {
      let value = data.map((data, index) => {
        if (string_to_slug(data.name).indexOf(string_to_slug(word)) >= 0) {
          const isInLibrary = library.findIndex(
            (library) => library.name === data.name
          );
          if (isInLibrary > -1) {
            var disable = true;
          } else {
            var disable = false;
          }
          return <PlanetWidget key={index} data={data} disable={disable} />;
        }
      });
      setListOfPlanets(value);
    }
  }, [word]);

  return (
    <>
      <h2>Or just search!</h2>
      <input
        type="text"
        className="search"
        placeholder="Tatooine"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <div className="row">{listOfPlanets}</div>
    </>
  );
};

export default AllPlanets;
