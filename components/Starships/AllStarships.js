import React from 'react';
import { StarshipsContext } from '../../DataProvider';
import StarshipsWidget from "./StarshipsWidget";


const AllStarships = () => {
    const data = React.useContext(StarshipsContext);
    console.log(data)

    if (data != undefined) {
        var listOfStarships = data.results.map((data, index) => {
            return (
                <StarshipsWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfStarships}
        </div>
    );
}

export default AllStarships;