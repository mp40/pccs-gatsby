import React, { useState } from "react";
import Layout from "../../components/layout";
import { getPercentageToHit } from "../../model/hand-to-hand";
import { form } from "./hand-to-hand.module.css";

export const Component = () => {
  const [attackLevel, setAttackLevel] = useState(0);
  const [defenseLevel, setDefenseLevel] = useState(0);
  const [parryValue, setParryLevel] = useState(9);

  return (
    <div>
      <h1>Hand To Hand</h1>
      <p>{`Chance To Hit: ${getPercentageToHit(
        attackLevel,
        defenseLevel,
        parryValue
      )}`}</p>
      <form className={form}>
        <label>
          <span>Attack Level</span>
          <select
            value={attackLevel}
            onChange={(e) => {
              setAttackLevel(e.target.value);
            }}
          >
            {[-2, -1, 0, 1, 2, 3, 4, 5].map((a) => {
              return (
                <option value={a} key={a}>
                  {a}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Defense Level</span>
          <select
            value={defenseLevel}
            onChange={(e) => {
              setDefenseLevel(e.target.value);
            }}
          >
            {[0, 1, 2, 3].map((d) => {
              return (
                <option value={d} key={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Parry Class</span>
          <select
            value={parryValue}
            onChange={(e) => {
              setParryLevel(e.target.value);
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => {
              return (
                <option value={p} key={p}>
                  {p}
                </option>
              );
            })}
          </select>
        </label>
      </form>
    </div>
  );
};

const IndexPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default IndexPage;
