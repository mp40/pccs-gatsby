import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>PCCS Tools</title>
        <h1>In Development</h1>
        <p>
          A site for tools and data to assist in using the Phoenix Command
          Combat System
        </p>
        <p>Also visit</p>
        <Link to="https://pccs.herokuapp.com/">PCCS Helper</Link>
        <p>
          An app for creating and using characters for Phoenix Command Combat
          System
        </p>
      </main>
    </Layout>
  );
};

export default IndexPage;
