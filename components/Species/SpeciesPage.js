import React from "react";
import { AppContex } from "../../DataProvider";

const SpeciesPage = (props) => {
  const { name } = props;
  const { species, people, films, planets, basedUrl } = React.useContext(
    AppContex
  );
  const data = species;

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

  if (data != undefined) {
    var speciesObject = data.find((data) => {
      let slugName = string_to_slug(data.name);
      return slugName === name;
    });
  }

  if (speciesObject != undefined) {
    var listOfFilms = speciesObject.films.map((film, index) => {
      let data = films.find((dataFilm) => dataFilm.url === film);
      let slugTitle = string_to_slug(data.title);
      return (
        <p key={index}>
          <a href={`${basedUrl}species/${slugTitle}`}>{data.title}</a>
        </p>
      );
    });

    var listOfPeople = speciesObject.people.map((planet, index) => {
      let data = people.find((dataPeople) => dataPeople.url === planet);
      if (data != undefined) {
        let slugName = string_to_slug(data.name);
        return (
          <p key={index}>
            <a href={`${basedUrl}people/${slugName}`}>{data.name}</a>
          </p>
        );
      }
    });

    let homeworld = planets.find(
      (dataPlanet) => dataPlanet.url === speciesObject.homeworld
    );
    let slugNameHomeworld = string_to_slug(homeworld.name);

    return (
      <>
        <div className="container">
          <div className="object">
            <h1>{speciesObject.name}</h1>
            <div className="row">
              <div className="col-md-4">
                <h2>Data: </h2>
                <p>
                  Average height: <b>{speciesObject.average_height}</b>
                </p>
                <p>
                  Average lifespan: <b>{speciesObject.average_lifespan}</b>
                </p>
                <p>
                  Classification: <b>{speciesObject.classification}</b>
                </p>
                <p>
                  Designation: <b>{speciesObject.designation}</b>
                </p>
                <p>
                  Eye colors: <b>{speciesObject.eye_colors}</b>
                </p>
                <p>
                  Hair colors: <b>{speciesObject.hair_colors}</b>
                </p>
                <p>
                  Homeworld:
                  <a href={`${basedUrl}planets/${slugNameHomeworld}`}>
                    {" "}
                    {homeworld.name}
                  </a>
                </p>
                <p>
                  Language: <b>{speciesObject.language}</b>
                </p>
                <p>
                  Skin colors: <b>{speciesObject.skin_colors}</b>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Films: </h2>
                {listOfFilms}
              </div>
              <div className="col-md-4">
                <h2>People: </h2>
                {listOfPeople}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div class="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
      </div>
    );
  }
};

export default SpeciesPage;
