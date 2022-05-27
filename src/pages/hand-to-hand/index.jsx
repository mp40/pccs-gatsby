import React, { useState } from "react";
import Layout from "../../components/layout";
import { getPercentageToHit } from "../../model/hand-to-hand";
import { form, table } from "./hand-to-hand.module.css";

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
      )}%`}</p>
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
            {[0, 1, 2, 3, 4, 5].map((d) => {
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
      <div className={table}>
        <div>Parry Column Modifiers</div>
        <table>
          <thead>
            <tr>
              <th>Target Situation</th>
              <th>Slashing Attack</th>
              <th>Stabbing Attack</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>In a Doorway</td>
              <td>+2</td>
              <td>0</td>
            </tr>
            <tr>
              <td>In a Window</td>
              <td>+3</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>Behind a 3.5 Foot Wall</td>
              <td>+2</td>
              <td>+2</td>
            </tr>
            <tr>
              <td>On Knees</td>
              <td>+2</td>
              <td>+2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={table}>
        <div>Attack Level Modifiers</div>
        <table>
          <thead>
            <tr>
              <th>Target Situation</th>
              <th>{`Slash with\nBladed Weapon`}</th>
              <th>{`Slash with\nImpact Head`}</th>
              <th>Stabbing Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Back to Wall, Tree, ect</td>
              <td>-2</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>On a Ladder</td>
              <td>-2</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Prone</td>
              <td>-2</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Visibility</td>
              <td>-V / 10</td>
              <td>-V / 10</td>
              <td>-V / 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const HandToHandPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default HandToHandPage;
