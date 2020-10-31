import React from "react";
import { DataProvider } from "../DataProvider";
import Calendar from "../components/Calendar";

export default function Home() {
  return (
    <DataProvider>
      <div className="container">
        <h1>Welcome to the largest Star Wars library!</h1>
        <h2 className="titleH">May the force be with you</h2>
        <div className="calendar-container"></div>
        <Calendar />
      </div>
    </DataProvider>
  );
}
