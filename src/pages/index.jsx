import React from "react";
import Layout from "../components/layout";

export const Component = () => {
  return (
    <main>
      <title>PCCS Tools</title>
      <h1>In Development</h1>
      <p>
        A site for tools and data to assist in using the Phoenix Command Combat
        System
      </p>
      <p>Also visit</p>
      <a href="https://pccs.herokuapp.com/">PCCS Helper</a>
      <p>
        An app for creating and using characters for Phoenix Command Combat
        System
      </p>
    </main>
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
