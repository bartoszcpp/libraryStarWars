import React from 'react';
import Link from 'next/link'

const PlanetWidget = (props) => {
    const { data } = props
    const name = data.name

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
    const slug = string_to_slug(name)

    return (
        <div className="col-3 planetWidgetContainer">
            <div className="widget">
                <h3>{name}</h3>
                <p>Climate: </p>
                <p>{data.climate}</p>
                <Link href="/planets/[planet]" as={`planets/${slug}`}>link text</Link>
            </div>
        </div>
    );
}

export default PlanetWidget;