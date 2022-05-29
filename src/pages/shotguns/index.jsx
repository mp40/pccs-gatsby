import React, { useState } from "react";
import Layout from "../../components/layout";
import { pelletSpreadTable, getRandomHitLocation } from "../../model/shotguns";
import { form, locations } from "./shotguns.module.css";

export const Component = () => {
  const [diceType, setDiceType] = useState(1000);
  const [salm, setSalm] = useState(-12);
  const [additionalHits, setAdditionalHits] = useState(1);
  const [location, setLocation] = useState(0);
  const [randomLocations, setRandomLocations] = useState(undefined);

  const handleSubmit = () => {
    let spread = pelletSpreadTable[salm];
    if (diceType === 1000) {
      spread = spread * 10;
    }
    const hits = [];

    for (let i = 0; i < additionalHits; i++) {
      hits.push(getRandomHitLocation(location, spread, diceType - 1));
    }

    setRandomLocations(hits);
  };

  return (
    <div>
      <h1>Shotguns</h1>
      <form className={form}>
        <label>
          <span>Initial Hit Location</span>
          <input
            type="number"
            min="0"
            max={diceType - 1}
            name="initialLocation"
            value={location}
            onChange={(e) => setLocation(Number(e.target.value))}
          />
        </label>
        <label>
          <span>SALM</span>
          <select
            value={salm}
            onChange={(e) => {
              setSalm(e.target.value);
            }}
          >
            {Object.keys(pelletSpreadTable)
              .sort((a, b) => a - b)
              .map((k) => {
                return (
                  <option value={k} key={k}>
                    {k}
                  </option>
                );
              })}
          </select>
        </label>
        <label>
          <span>Additional Hits</span>
          <input
            type="number"
            min="1"
            max="25"
            name="hitCount"
            value={additionalHits}
            onChange={(e) => setAdditionalHits(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Dice</span>
          <select
            value={diceType}
            onChange={(e) => {
              setDiceType(Number(e.target.value));
            }}
          >
            {[100, 1000].map((d) => {
              return (
                <option value={d} key={d}>
                  {`d${d}`}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <button type="button" onClick={handleSubmit}>
        Random Locations
      </button>
      <button type="button" onClick={() => setRandomLocations(undefined)}>
        Clear Locations
      </button>
      {randomLocations && (
        <div className={locations}>
          {randomLocations.map((l, i) => {
            return <span key={i}>{l}</span>;
          })}
        </div>
      )}
    </div>
  );
};

const ShotgunsPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default ShotgunsPage;
