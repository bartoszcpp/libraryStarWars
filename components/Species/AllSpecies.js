import React from 'react';
import { SpeciesContext } from '../../DataProvider';
import SpeciesWidget from "./SpeciesWidget";


const AllSpecies = () => {
    const data = React.useContext(SpeciesContext);
    console.log(data)

    if (data != undefined) {
        var listOfSpecies = data.results.map((data, index) => {
            return (
                <SpeciesWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfSpecies}
        </div>
    );
}

export default AllSpecies;