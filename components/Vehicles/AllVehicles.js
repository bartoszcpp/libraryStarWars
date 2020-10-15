import React from 'react';
import { VehiclesContext } from '../../DataProvider';
import VehiclesWidget from "./VehiclesWidget";


const AllVehicles = () => {
    const data = React.useContext(VehiclesContext);
    console.log(data)

    if (data != undefined) {
        var listOfVehicles = data.results.map((data, index) => {
            return (
                <VehiclesWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfVehicles}
        </div>
    );
}

export default AllVehicles;