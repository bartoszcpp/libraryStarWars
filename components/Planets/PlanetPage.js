import React from "react";
import { AppContex } from "../../DataProvider";

const PlanetPage = (props) => {
  const { name } = props;
  const { planets, films, people, basedUrl } = React.useContext(AppContex);
  const data = planets;

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
    var planetObject = data.find((data) => {
      let slugName = string_to_slug(data.name);
      return slugName === name;
    });
  }

  if (planetObject != undefined) {
    var listOfFilms = planetObject.films.map((film, index) => {
      let data = films.find((dataFilm) => dataFilm.url === film);
      let slugTitle = string_to_slug(data.title);
      return (
        <p key={index}>
          <a href={`${basedUrl}films/${slugTitle}`}>{data.title}</a>
        </p>
      );
    });

    var listOfPeople = planetObject.residents.map((planet, index) => {
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

    return (
      <>
        <div className="container">
          <div className="object">
            <h1>{planetObject.name}</h1>
            <div className="row">
              <div className="col-md-4">
                <h2>Data: </h2>
                <p></p>
                <p>
                  Climate: <b>{planetObject.climate}</b>
                </p>
                <p>
                  Diameter: <b>{planetObject.diameter}</b>
                </p>
                <p>
                  Gravity: <b>{planetObject.gravity}</b>
                </p>
                <p>
                  Orbital period: <b>{planetObject.orbital_period}</b>
                </p>
                <p>
                  Population: <b>{planetObject.population}</b>
                </p>
                <p>
                  Rotation Period: <b>{planetObject.rotation_period}</b>
                </p>
                <p>
                  Surface Water: <b>{planetObject.surface_water}</b>
                </p>
                <p>
                  Terrain: <b>{planetObject.terrain}</b>
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

export default PlanetPage;
