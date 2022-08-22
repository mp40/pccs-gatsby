import React, { useState, useEffect } from "react";
import {
  salTable,
  rangeTable,
  targetSizeMods,
  movement,
  getMovementMod,
} from "./data";

const Shooting = () => {
  const [eal, setEal] = useState(null);
  const [gunLevel, setGunLevel] = useState(0);
  const [range, setRange] = useState(50);
  const [targetSize, setTargetSize] = useState("Standing Exposed");
  const [auto, setAuto] = useState(false);
  const [shooterMovement, setShooterMovement] = useState(0);
  const [targetMovement, setTargetMovement] = useState(0);

  useEffect(() => {
    const sal = salTable[gunLevel];
    const rangeEal = rangeTable[range];

    const sizeEal = targetSizeMods[targetSize][0];

    const movementEal = getMovementMod(shooterMovement, targetMovement, range);
    console.log("shooter", shooterMovement);
    console.log("target", targetMovement);
    console.log("P>", targetMovement + shooterMovement);
    console.log("eal>", movementEal);

    const updated = sal + rangeEal + sizeEal + movementEal;

    setEal(updated);
  }, [gunLevel, range, targetSize, shooterMovement, targetMovement]);

  return (
    <div>
      <span>{`EAL: ${eal}`}</span>
      <form>
        <label>
          <span>Gun Combat Level</span>
          <select
            value={gunLevel}
            onChange={(e) => {
              setGunLevel(Number(e.target.value));
            }}
          >
            {Object.keys(salTable).map((lvl) => {
              return (
                <option value={lvl} key={lvl}>
                  {lvl}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Range</span>
          <select
            value={range}
            onChange={(e) => {
              setRange(Number(e.target.value));
            }}
          >
            {Object.keys(rangeTable).map((rng) => {
              return (
                <option value={rng} key={rng}>
                  {rng}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label>
          <span>Target Size</span>
          <select
            value={targetSize}
            onChange={(e) => {
              setTargetSize(e.target.value);
            }}
          >
            {Object.keys(targetSizeMods).map((target) => {
              return (
                <option value={target} key={target}>
                  {target}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label>
          <span>Shooter Movement</span>
          <select
            value={shooterMovement}
            onChange={(e) => {
              setShooterMovement(Number(e.target.value));
            }}
          >
            {movement.map((move) => {
              return (
                <option value={move} key={move}>
                  {move}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Target Movement</span>
          <select
            value={targetMovement}
            onChange={(e) => {
              setTargetMovement(Number(e.target.value));
            }}
          >
            {movement.map((move) => {
              return (
                <option value={move} key={move}>
                  {move}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

export default Shooting;
