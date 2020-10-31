import React from "react";
import { AppContex } from "../../DataProvider";

const PeoplePage = (props) => {
  const { name } = props;
  const {
    people,
    films,
    species,
    planets,
    starships,
    vehicles,
    basedUrl,
  } = React.useContext(AppContex);
  const data = people;

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
    var peopleObject = data.find((data) => {
      let slugName = string_to_slug(data.name);
      return slugName === name;
    });
  }

  if (peopleObject != undefined) {
    var listOfFilms = peopleObject.films.map((film, index) => {
      let data = films.find((dataFilm) => dataFilm.url === film);
      let slugTitle = string_to_slug(data.title);
      return (
        <p key={index}>
          <a href={`${basedUrl}films/${slugTitle}`}>{data.title}</a>
        </p>
      );
    });

    var listOfSpecies = peopleObject.species.map((type, index) => {
      let data = species.find((dataSpecies) => dataSpecies.url === type);
      let slugName = string_to_slug(data.name);
      return (
        <p key={index}>
          <a href={`${basedUrl}species/${slugName}`}>{data.name}</a>
        </p>
      );
    });

    var listOfStarships = peopleObject.starships.map((starship, index) => {
      let data = starships.find(
        (dataStarship) => dataStarship.url === starship
      );
      let slugName = string_to_slug(data.name);
      return (
        <p key={index}>
          <a href={`${basedUrl}starships/${slugName}`}>{data.name}</a>
        </p>
      );
    });

    var listOfVehicles = peopleObject.vehicles.map((vehicle, index) => {
      let data = vehicles.find((dataVehicle) => dataVehicle.url === vehicle);
      let slugName = string_to_slug(data.name);
      return (
        <p key={index}>
          <a href={`${basedUrl}vehicles/${slugName}`}>{data.name}</a>
        </p>
      );
    });

    let homeworld = planets.find(
      (dataPlanet) => dataPlanet.url === peopleObject.homeworld
    );
    let slugNameHomeworld = string_to_slug(homeworld.name);

    return (
      <>
        <div className="container">
          <div className="object">
            <h1>{peopleObject.name}</h1>
            <div className="row">
              <div className="col-md-4">
                <h2>Data: </h2>
                <p>
                  Birth Year: <b>{peopleObject.birth_year}</b>
                </p>
                <p>
                  Eye Color: <b>{peopleObject.eye_color}</b>
                </p>
                <p>
                  Gender: <b>{peopleObject.gender}</b>
                </p>
                <p>
                  Hair Color: <b>{peopleObject.hair_color}</b>
                </p>
                <p>
                  Height: <b>{peopleObject.height}</b>
                </p>
                <p>
                  Homeworld:
                  <a href={`${basedUrl}planets/${slugNameHomeworld}`}>
                    {" "}
                    {homeworld.name}
                  </a>
                </p>
                <p>
                  Mass: <b>{peopleObject.mass}</b>
                </p>
                <p>
                  Skin Color: <b>{peopleObject.skin_color}</b>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Films: </h2>
                {listOfFilms}
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

export default PeoplePage;
