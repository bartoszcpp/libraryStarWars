import React from 'react';
import LibraryPage from '../components/LibraryPage';
import { DataProvider } from '../DataProvider';

const library = () => {

    return (
        <DataProvider>
            <LibraryPage />
        </DataProvider>
    );
};

export default library;