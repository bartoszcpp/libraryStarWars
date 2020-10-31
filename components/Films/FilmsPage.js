import React from "react";
import { AppContex } from "../../DataProvider";

const FilmsPage = (props) => {
  const { title } = props;
  const {
    films,
    people,
    species,
    starships,
    vehicles,
    basedUrl,
  } = React.useContext(AppContex);
  const data = films;

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
    var filmsObject = data.find((data) => {
      let slugName = string_to_slug(data.title);
      return slugName === title;
    });
  }

  if (filmsObject != undefined) {
    var listOfPeople = filmsObject.characters.map((planet, index) => {
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

    var listOfSpecies = filmsObject.species.map((planet, index) => {
      let data = species.find((dataPeople) => dataPeople.url === planet);
      if (data != undefined) {
        let slugName = string_to_slug(data.name);
        return (
          <p key={index}>
            <a href={`${basedUrl}species/${slugName}`}>{data.name}</a>
          </p>
        );
      }
    });

    var listOfStarships = filmsObject.starships.map((planet, index) => {
      let data = starships.find((dataPeople) => dataPeople.url === planet);
      if (data != undefined) {
        let slugName = string_to_slug(data.name);
        return (
          <p key={index}>
            <a href={`${basedUrl}starships/${slugName}`}>{data.name}</a>
          </p>
        );
      }
    });

    var listOfVehicles = filmsObject.vehicles.map((planet, index) => {
      let data = vehicles.find((dataPeople) => dataPeople.url === planet);
      if (data != undefined) {
        let slugName = string_to_slug(data.name);
        return (
          <p key={index}>
            <a href={`${basedUrl}vehicles/${slugName}`}>{data.name}</a>
          </p>
        );
      }
    });

    return (
      <>
        <div className="container">
          <div className="object">
            <h1>{filmsObject.title}</h1>
            <div className="row">
              <div className="col-md-4">
                <h2>Data: </h2>
                <p>
                  Director: <b>{filmsObject.director}</b>
                </p>
                <p>
                  Episode id: <b>{filmsObject.episode_id}</b>
                </p>
                <p>
                  Opening crawl: <b>{filmsObject.opening_crawl}</b>
                </p>
                <p>
                  Producer: <b>{filmsObject.producer}</b>
                </p>
                <p>
                  Release date: <b>{filmsObject.release_date}</b>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Characters: </h2>
                {listOfPeople}
              </div>
              <div className="col-md-4">
                <h2>Species: </h2>
                {listOfSpecies}
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h2>Starships: </h2>
                {listOfStarships}
              </div>
              <div className="col-md-4">
                <h2>Vehicles: </h2>
                {listOfVehicles}
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

export default FilmsPage;
