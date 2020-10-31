import React from "react";
import { AppContex } from "../../DataProvider";

const StarshipsPage = (props) => {
  const { name } = props;
  const { starships, films, basedUrl } = React.useContext(AppContex);
  const data = starships;

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
    var starshipsObject = data.find((data) => {
      let slugName = string_to_slug(data.name);
      return slugName === name;
    });
  }

  if (starshipsObject != undefined) {
    var listOfFilms = starshipsObject.films.map((film, index) => {
      let data = films.find((dataFilm) => dataFilm.url === film);
      let slugTitle = string_to_slug(data.title);
      return (
        <p key={index}>
          <a href={`${basedUrl}films/${slugTitle}`}>{data.title}</a>
        </p>
      );
    });

    return (
      <>
        <div className="container">
          <div className="object">
            <h1>{starshipsObject.name}</h1>
            <div className="row">
              <div className="col-md-4">
                <h2>Data: </h2>
                <p>
                  MGLT: <b>{starshipsObject.MGLT}</b>
                </p>
                <p>
                  Cargo capacity: <b>{starshipsObject.cargo_capacity}</b>
                </p>
                <p>
                  Consumables: <b>{starshipsObject.consumables}</b>
                </p>
                <p>
                  Cost in credits: <b>{starshipsObject.cost_in_credits}</b>
                </p>
                <p>
                  Crew: <b>{starshipsObject.crew}</b>
                </p>
                <p>
                  Hyperdrive rating: <b>{starshipsObject.hyperdrive_rating}</b>
                </p>
                <p>
                  Length: <b>{starshipsObject.length}</b>
                </p>
                <p>
                  Manufacturer: <b>{starshipsObject.manufacturer}</b>
                </p>
                <p>
                  Max atmosphering speed:{" "}
                  <b>{starshipsObject.max_atmosphering_speed}</b>
                </p>
                <p>
                  Model: <b>{starshipsObject.model}</b>
                </p>
                <p>
                  Passengers: <b>{starshipsObject.passengers}</b>
                </p>
                <p>
                  Starship class: <b>{starshipsObject.starship_class}</b>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Films: </h2>
                {listOfFilms}
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

export default StarshipsPage;
