import React from "react";
import { oddsOfHittingTable } from "./data";

import { container } from "./hit-chance.module.css";

const HitChance = () => {
  const ealList = Object.keys(oddsOfHittingTable).sort((a, b) => {
    if (Number(a) < Number(b)) {
      return 1;
    }

    if (Number(a) > Number(b)) {
      return -1;
    }

    return 0;
  });

  return (
    <div className={container}>
      <div>
        <span>EAL</span>
        <span>Sgl</span>
        <span>Auto</span>
      </div>
      {ealList.map((key) => {
        return (
          <div key={key}>
            <span>{key}</span>
            <span>{oddsOfHittingTable[key][0]}</span>
            <span>{oddsOfHittingTable[key][1]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HitChance;
