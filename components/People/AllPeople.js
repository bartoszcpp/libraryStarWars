import React from 'react';
import { PeopleContext } from '../../DataProvider';
import PeopleWidget from "./PeopleWidget";


const AllPeople = () => {
    const data = React.useContext(PeopleContext);
    console.log(data)

    if (data != undefined) {
        console.log(data)
        var listOfPeople = data.results.map((data, index) => {
            return (
                <PeopleWidget key={index} data={data} />
            )
        })
    }

    return (
        <div className="row">
            {listOfPeople}
        </div>
    );
}

export default AllPeople;