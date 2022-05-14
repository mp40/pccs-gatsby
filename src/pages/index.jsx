import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export const Home = () => {
  return (
    <main>
      <title>PCCS Tools</title>
      <h1>In Development</h1>
      <p>
        A site for tools and data to assist in using the Phoenix Command Combat
        System
      </p>
      <p>Also visit</p>
      <a to="https://pccs.herokuapp.com/">PCCS Helper</a>
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
      <Home />
    </Layout>
  );
};

export default IndexPage;
