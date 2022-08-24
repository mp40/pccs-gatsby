import React, { useState } from "react";
import Layout from "../../components/layout";
import Shooting from "../../components/shooting";
import HitChance from "../../components/hit-chance";

import { container, left } from "./shooting.module.css";

export const Component = () => {
  const [length, setLength] = useState(1);

  return (
    <div>
      <h1>Shooting</h1>
      <div className={container}>
        <div className={left}>
          <div>
            <button type="button" onClick={() => setLength(length + 1)}>
              add
            </button>
            {length > 1 && (
              <button type="button" onClick={() => setLength(length - 1)}>
                remove last
              </button>
            )}
          </div>
          {[...Array(length).keys()].map((i) => {
            return <Shooting key={i} />;
          })}
        </div>
        <HitChance />
      </div>
    </div>
  );
};

const ShootingPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default ShootingPage;
