import React from 'react';
import { AppContex } from '../DataProvider';
import Link from 'next/link'

const LibraryPage = () => {

    const { library } = React.useContext(AppContex);

    const listOfLibrary = library.map((library, index) => (
        <div className="col-md-4" key={index}>
            <div className="planetWidgetContainer">
                <div className="widget">
                    <h3>{library.name}</h3>
                    <p>Category: <b>{library.category}</b></p>
                    <Link href={library.url}>Read more...</Link>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="container">
            <h1>Your library</h1>
            <div className="row">
                {listOfLibrary}
            </div>
        </div>
    );
}

export default LibraryPage;