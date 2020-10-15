import React from 'react';

import Link from 'next/link'
import { DataProvider } from '../DataProvider';

// const url = "https://swapi.dev/api/"

export default function Home() {

  return (
    <DataProvider>
      <div className="container">
        <h1>Chose:</h1>
        <div className='widget'>
          <h2>Planets:
            <Link href="/planets">link text</Link>
          </h2>
        </div>
        <div className='widget'>
          <h2>People
            <Link href="/people">link text</Link>
          </h2>
        </div>
        <div className='widget'>
          <h2>Starships: 
            <Link href="/starships">link text</Link>
          </h2>
        </div>
        <div className='widget'>
          <h2>Species: 
            <Link href="/species">link text</Link>
          </h2>
        </div>
        <div className='widget'>
          <h2>Vehicles: 
            <Link href="/vehicles">link text</Link>
          </h2>
        </div>
        <div className='widget'>
          <h2>Films: 
            <Link href="/films">link text</Link>
          </h2>
        </div>
      </div>
    </DataProvider>
  )
}
