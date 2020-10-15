import React from 'react';
import { PlanetContext } from '../../DataProvider';
import { FilmsContext } from '../../DataProvider';
import { PeopleContext } from '../../DataProvider';
import { UrlContext } from '../../DataProvider';


const PlanetPage = (props) => {
    const { name } = props;
    const data = React.useContext(PlanetContext);
    const dataFilms = React.useContext(FilmsContext);
    const dataPeople = React.useContext(PeopleContext);
    const basedUrl = React.useContext(UrlContext);

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
        console.log(data)
        var planetObject = data.results.find(data => {
            let slugName = string_to_slug(data.name)
            return (slugName === name)
        })
    }

    if (planetObject != undefined) {

        var listOfFilms = planetObject.films.map((film, index) => {
            let data = dataFilms.results.find(dataFilm => dataFilm.url === film);
            let slugTitle = string_to_slug(data.title)
            console.log(slugTitle)
            return (
                <p key={index}>
                    <a href={`${basedUrl}films/${slugTitle}`}>{data.title}</a>
                </p >
            )
        })

        console.log(planetObject)

        var listOfPeople = planetObject.residents.map((people, index) => {
            let data = dataPeople.results.find(dataPeople => dataPeople.url === people);
            console.log(data)
            if (data != undefined) {
                let slugName = string_to_slug(data.name)
                console.log(slugName)
                return (
                    <p key={index}>
                        <a href={`${basedUrl}people/${slugName}`}>{data.name}</a>
                    </p >
                )
            }
        })

        return (
            <>
                <div className='container'>
                    <div className="object">
                        <h1>{planetObject.name}</h1>
                        <div className="row">
                            <div className="col-md-4">
                                <h2>Data: </h2>
                                <p></p>
                                <p>Climate: <b>{planetObject.climate}</b></p>
                                <p>Diameter: <b>{planetObject.diameter}</b></p>
                                <p>Gravity: <b>{planetObject.gravity}</b></p>
                                <p>Orbital period: <b>{planetObject.orbital_period}</b></p>
                                <p>Population: <b>{planetObject.population}</b></p>
                                <p>Rotation Period: <b>{planetObject.rotation_period}</b></p>
                                <p>Surface Water: <b>{planetObject.surface_water}</b></p>
                                <p>Terrain: <b>{planetObject.terrain}</b></p>
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
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        )
    }

}

export default PlanetPage;