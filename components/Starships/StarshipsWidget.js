import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons"
import { addToFavorite } from "../../functions"

const StarshipsWidget = (props) => {
    const { data, disable } = props
    const name = data.name

    const [disabled, setDisabled] = useState(disable);

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
    const url = `starships/${slug}`
    const category = "starships"

    const handleOnClick = () => {
        addToFavorite(name, url, category)
        setDisabled(!disabled)
    }

    return (
        <div className="col-md-4">
            <div className="planetWidgetContainer">
                <div className="widget libraryButton">
                    <button className={`library ${disabled ? "disable" : ""}`} onClick={() => handleOnClick()}>
                        <FontAwesomeIcon className="socialIcon" icon={faJournalWhills} />
                    </button>
                    <h3>{name}</h3>
                    <p>MGLT: <b>{data.MGLT}</b></p>
                    <p>Cargo Capacity: <b>{data.cargo_capacity}</b></p>
                    <Link href="/starships/[starship]" as={url}>Read more...</Link>
                </div>
            </div>
        </div>
    );
}

export default StarshipsWidget;