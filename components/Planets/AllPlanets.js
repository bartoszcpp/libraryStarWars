import React from 'react';
import { PlanetContext } from '../../DataProvider';
import PlanetWidget from "./PlanetWidget";


const AllPlanets = () => {
    const data = React.useContext(PlanetContext);
    console.log(data)

    if (data != undefined) {
        var listOfPlanets = data.results.map((data, index) => {
            return (
                <PlanetWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfPlanets}
        </div>
    );
}

export default AllPlanets;