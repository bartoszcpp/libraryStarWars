import React from 'react';
import { FilmsContext } from '../../DataProvider';
import FilmsWidget from "./FilmsWidget";


const AllFilms = () => {
    const data = React.useContext(FilmsContext);

    if (data != undefined) {
        var listOfFilms = data.results.map((data, index) => {
            return (
                <FilmsWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfFilms}
        </div>
    );
}

export default AllFilms;