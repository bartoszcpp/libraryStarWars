import React from 'react';
import { PlanetContext } from '../../DataProvider';

const PlanetPage = (props) => {
    const { name } = props;
    const data = React.useContext(PlanetContext);

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

    return (
        <>
            <p>{planetObject.name}</p>
            <p>{planetObject.climate}</p>
        </>
    );
}

export default PlanetPage;