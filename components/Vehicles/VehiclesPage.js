import React from 'react';
import { AppContex } from '../../DataProvider';

const VehiclesPage = (props) => {
    const { name } = props;
    const { vehicles, films, basedUrl } = React.useContext(AppContex);
    const data = vehicles

    function string_to_slug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();

        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to = "aaaaeeeeiiiioooouuuunc------";
        for (var i = 0, l = from.length; i < l; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }

    if (data != undefined) {
        var vehiclesObject = data.find(data => {
            let slugName = string_to_slug(data.name)
            return (slugName === name)
        })
    }

    if (vehiclesObject != undefined) {

        var listOfFilms = vehiclesObject.films.map((film, index) => {
            let data = films.find(dataFilm => dataFilm.url === film);
            let slugTitle = string_to_slug(data.title)
            return (
                <p key={index}>
                    <a href={`${basedUrl}films/${slugTitle}`}>{data.title}</a>
                </p >
            )
        })

        return (
            <>
                <div className='container'>
                    <div className="object">
                        <h1>{vehiclesObject.name}</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Data: </h2>
                                <p>Cargo capacity: <b>{vehiclesObject.cargo_capacity}</b></p>
                                <p>Consumables: <b>{vehiclesObject.consumables}</b></p>
                                <p>Cost in credits: <b>{vehiclesObject.cost_in_credits}</b></p>
                                <p>Crew: <b>{vehiclesObject.crew}</b></p>
                                <p>Length: <b>{vehiclesObject.length}</b></p>
                                <p>Manufacturer: <b>{vehiclesObject.manufacturer}</b></p>
                                <p>Max atmosphering speed: <b>{vehiclesObject.max_atmosphering_speed}</b></p>
                                <p>Model: <b>{vehiclesObject.model}</b></p>
                                <p>Passengers: <b>{vehiclesObject.passengers}</b></p>
                                <p>Vehicle class: <b>{vehiclesObject.vehicle_class}</b></p>
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
        )
    }
}

export default VehiclesPage;