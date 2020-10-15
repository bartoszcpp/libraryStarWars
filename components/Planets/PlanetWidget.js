import React from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons"
import { addToFavorite } from "../../functions"

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
    const url = `planets/${slug}`

    return (
        <div className="col-md-4">
            <div className="planetWidgetContainer">
                <div className="widget">
                    <div className="library" onClick={() => addToFavorite(name, url)}>
                        <FontAwesomeIcon className="socialIcon" icon={faJournalWhills} />
                    </div>
                    <h3>{name}</h3>
                    <p>Climate: <b>{data.climate}</b></p>
                    <p>Diameter: <b>{data.diameter}</b></p>
                    <Link href="/planets/[planet]" as={url}>Read more...</Link>
                </div>
            </div>
        </div>
    );
}

export default PlanetWidget;