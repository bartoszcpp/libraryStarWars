import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons"
import { addToFavorite } from "../../functions"

const FilmsWidget = (props) => {
    const { data, disable } = props
    const title = data.title

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
    const slug = string_to_slug(title)
    const url = `films/${slug}`
    const category = "films"

    const handleOnClick = () => {
        addToFavorite(title, url, category)
        setDisabled(!disabled)
    }

    return (
        <div className="col-md-4">
            <div className="planetWidgetContainer">
                <div className="widget libraryButton">
                    <div className={`library ${disabled ? "disable" : ""}`} onClick={() => handleOnClick()}>
                        <FontAwesomeIcon className="socialIcon" icon={faJournalWhills} />
                    </div>
                    <h3>{title}</h3>
                    <p>Director: <b>{data.director}</b></p>
                    <p>Release date: <b>{data.release_date}</b></p>
                    <Link href="/films/[films]" as={url}>Read more...</Link>
                </div>
            </div>
        </div>
    );
}

export default FilmsWidget;