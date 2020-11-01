import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faReply } from "@fortawesome/free-solid-svg-icons";
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DataProvider } from "../DataProvider";

export default function Home() {
  const [expand, setExpand] = useState(false);

  return (
    <DataProvider>
      <div className="container">
        <h1>Welcome to the largest Star Wars library!</h1>
        <h2 className="titleH">May the force be with you</h2>
        <div className="widget widgetExampleContainer">
          <h2>Short guide</h2>
          <div onClick={() => setExpand(!expand)}>
            <FontAwesomeIcon
              className={`socialIcon ${expand ? "deg90" : "deg270"}`}
              icon={faReply}
            />
          </div>
          <div className={`${expand ? "visible" : "invisible"}`}>
            <div className="row">
              <div className="col-md-4">
                <div className="planetWidgetContainer">
                  <div className="widgetExample">
                    <div className="library">
                      <FontAwesomeIcon
                        className="socialIcon"
                        icon={faJournalWhills}
                      />
                    </div>
                    <h3>Tatooine</h3>
                    <p>
                      Climate: <b>arid</b>
                    </p>
                    <p>
                      Diameter: <b>10465</b>
                    </p>
                    Read more...
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="planetWidgetContainer">
                  <FontAwesomeIcon
                    className="socialIcon arrow"
                    icon={faReply}
                  />
                  <p>Click this book to add a fragment to your library</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="planetWidgetContainer">
                  <FontAwesomeIcon
                    className="socialIcon arrowRight"
                    icon={faShare}
                  />
                  <p>Enter the interesting item in a category in the link</p>
                </div>
              </div>
              <div className="col-md-7">
                <img src="/url.png" className="img-fluid"></img>
              </div>
            </div>
            <h3>And of course explore all category</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link href="/planets">
              <div className="widget mainWidget">
                <h2>Planets</h2>
                <img src="/planet.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/people">
              <div className="widget mainWidget">
                <h2>People</h2>
                <img src="/people.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/starships">
              <div className="widget mainWidget">
                <h2>Starships</h2>
                <img src="/starships.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/species">
              <div className="widget mainWidget">
                <h2>Species</h2>
                <img src="/species.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/vehicles">
              <div className="widget mainWidget">
                <h2>Vehicles</h2>
                <img src="/vehicles.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link href="/films">
              <div className="widget mainWidget">
                <h2>Films</h2>
                <img src="/film.png" className="img-fluid"></img>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </DataProvider>
  );
}
