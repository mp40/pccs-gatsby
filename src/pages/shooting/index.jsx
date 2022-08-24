import React from "react";
import Layout from "../../components/layout";
import Shooting from "../../components/shooting";

export const Component = () => {
  return (
    <div>
      <h1>Shooting</h1>
      <Shooting />
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
